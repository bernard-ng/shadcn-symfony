<?php

namespace App\Twig\Extension;

use TalesFromADev\Twig\Extra\Tailwind\TailwindRuntime;
use Twig\Attribute\AsTwigFunction;

/**
 * Class ClassNamesExtension.
 *
 * @author bernard-ng <bernard@devscast.tech>
 */
final readonly class ClassNamesExtension
{
    public function __construct(
        private TailwindRuntime $tailwind
    ) {
    }

    #[AsTwigFunction('cn')]
    public function cn(mixed ...$inputs): string
    {
        $className = $this->clsx(...$inputs);

        if ($className === '') {
            return '';
        }

        return $this->tailwind->merge($className);
    }

    #[AsTwigFunction('clsx')]
    public function clsx(mixed ...$inputs): string
    {
        $result = '';

        foreach ($inputs as $input) {
            if ($input === null || $input === false) {
                continue;
            }

            $value = $this->toVal($input);

            if ($value === '') {
                continue;
            }

            if ($result !== '') {
                $result .= ' ';
            }

            $result .= $value;
        }

        return $result;
    }

    private function toVal(mixed $mix): string
    {
        if ($mix instanceof \BackedEnum) {
            $mix = $mix->value;
        }

        if ($mix instanceof Stringable) {
            $mix = (string) $mix;
        }

        if ($mix instanceof Traversable) {
            $mix = iterator_to_array($mix);
        }

        if (is_string($mix)) {
            return $mix;
        }

        if (is_int($mix) || is_float($mix)) {
            return (string) $mix;
        }

        if (is_array($mix)) {
            $result = '';

            if ($mix === []) {
                return '';
            }

            if (function_exists('array_is_list') ? array_is_list($mix) : $this->isList($mix)) {
                foreach ($mix as $value) {
                    if ($value === null || $value === false) {
                        continue;
                    }

                    $nested = $this->toVal($value);

                    if ($nested === '') {
                        continue;
                    }

                    if ($result !== '') {
                        $result .= ' ';
                    }

                    $result .= $nested;
                }
            } else {
                foreach ($mix as $key => $value) {
                    if (!$value || !is_string($key) || $key === '') {
                        continue;
                    }

                    if ($result !== '') {
                        $result .= ' ';
                    }

                    $result .= $key;
                }
            }

            return $result;
        }

        if (is_object($mix)) {
            $vars = get_object_vars($mix);

            if ($vars === []) {
                return '';
            }

            return $this->toVal($vars);
        }

        return '';
    }

    private function isList(array $array): bool
    {
        $expectedKey = 0;

        foreach ($array as $key => $_) {
            if ($key !== $expectedKey) {
                return false;
            }

            $expectedKey++;
        }

        return true;
    }
}
