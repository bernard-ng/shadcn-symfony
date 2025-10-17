import { Controller } from '@hotwired/stimulus';

const FOCUSABLE_SELECTORS = [
    '[data-autofocus]',
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'iframe',
    'object',
    'embed',
    '[contenteditable]',
    '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default class extends Controller {
    static targets = ['trigger', 'overlay', 'content', 'close'];

    static values = {
        open: { type: Boolean, default: false },
    };

    connect() {
        this.boundHandleKeydown = this.handleKeydown.bind(this);
        this.hasKeydownListener = false;
        this.previousActiveElement = null;
        this.isCurrentlyOpen = undefined;

        this.sheetId = this.element.id || this.generateId('sheet');

        if (!this.element.id) {
            this.element.id = this.sheetId;
        }

        this.contentTargets.forEach((content, index) => {
            this.ensureContentId(content, index);
            this.ensureAriaAttributes(content);
        });

        this.applyState(this.openValue);
    }

    disconnect() {
        this.removeKeydownListener();
        this.enableScroll();
    }

    open(event) {
        if (event) {
            event.preventDefault();
        }

        if (!this.openValue) {
            this.openValue = true;
        }
    }

    close(event) {
        if (event) {
            event.preventDefault();
        }

        if (this.openValue) {
            this.openValue = false;
        }
    }

    toggle(event) {
        if (event) {
            event.preventDefault();
        }

        this.openValue = !this.openValue;
    }

    openValueChanged(value) {
        if (!this.isConnected) {
            return;
        }

        this.applyState(value);
    }

    applyState(isOpen) {
        const state = isOpen ? 'open' : 'closed';

        this.element.dataset.state = state;
        this.updateTriggers(isOpen, state);
        this.updateTargets(this.overlayTargets, isOpen, state, { ariaHidden: true });
        this.updateTargets(this.closeTargets, isOpen, state);
        this.updateContentTargets(isOpen, state);

        if (isOpen && !this.isCurrentlyOpen) {
            this.disableScroll();
            this.addKeydownListener();
            this.rememberFocus();
            this.focusContent();
        } else if (!isOpen && this.isCurrentlyOpen) {
            this.removeKeydownListener();
            this.enableScroll();
            this.restoreFocus();
        }

        this.isCurrentlyOpen = isOpen;
    }

    updateTriggers(isOpen, state) {
        const ariaExpanded = isOpen ? 'true' : 'false';
        const contentId = this.contentTargets[0]?.id;

        this.triggerTargets.forEach((trigger) => {
            trigger.dataset.state = state;
            trigger.setAttribute('aria-expanded', ariaExpanded);

            if (contentId) {
                trigger.setAttribute('aria-controls', contentId);
            }
        });
    }

    updateTargets(targets, isOpen, state, options = {}) {
        targets.forEach((target) => {
            target.dataset.state = state;

            if ('hidden' in target) {
                target.hidden = !isOpen;
            }

            if (options.ariaHidden === true) {
                target.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            }
        });
    }

    updateContentTargets(isOpen, state) {
        this.contentTargets.forEach((content, index) => {
            content.dataset.state = state;
            content.hidden = !isOpen;
            content.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            this.ensureContentId(content, index);
            this.ensureAriaAttributes(content);
        });
    }

    rememberFocus() {
        const active = document.activeElement;

        if (active instanceof HTMLElement) {
            this.previousActiveElement = active;
        } else {
            this.previousActiveElement = null;
        }
    }

    focusContent() {
        const content = this.contentTargets[0];

        if (!content) {
            return;
        }

        window.requestAnimationFrame(() => {
            const elements = this.focusableElements(content);
            const autofocus = elements.find((element) => element.hasAttribute('data-autofocus'));
            const target = autofocus || elements[0] || content;

            if (target instanceof HTMLElement) {
                target.focus({ preventScroll: true });
            }
        });
    }

    restoreFocus() {
        if (this.previousActiveElement instanceof HTMLElement) {
            window.requestAnimationFrame(() => {
                this.previousActiveElement?.focus({ preventScroll: true });
            });
        }

        this.previousActiveElement = null;
    }

    handleKeydown(event) {
        if (!this.openValue) {
            return;
        }

        if (event.key === 'Escape') {
            event.preventDefault();
            this.close();
            return;
        }

        if (event.key === 'Tab') {
            this.maintainFocus(event);
        }
    }

    maintainFocus(event) {
        const content = this.contentTargets[0];

        if (!content) {
            return;
        }

        const focusable = this.focusableElements(content);

        if (focusable.length === 0) {
            event.preventDefault();
            content.focus({ preventScroll: true });
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (event.shiftKey) {
            if (active === first || !content.contains(active)) {
                event.preventDefault();
                last.focus({ preventScroll: true });
            }
        } else if (active === last) {
            event.preventDefault();
            first.focus({ preventScroll: true });
        }
    }

    focusableElements(container) {
        return Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS)).filter((element) => {
            if (!(element instanceof HTMLElement)) {
                return false;
            }

            if (element.hasAttribute('disabled')) {
                return false;
            }

            if (element.getAttribute('aria-hidden') === 'true') {
                return false;
            }

            return element.offsetParent !== null || element === document.activeElement;
        });
    }

    addKeydownListener() {
        if (this.hasKeydownListener) {
            return;
        }

        document.addEventListener('keydown', this.boundHandleKeydown);
        this.hasKeydownListener = true;
    }

    removeKeydownListener() {
        if (!this.hasKeydownListener) {
            return;
        }

        document.removeEventListener('keydown', this.boundHandleKeydown);
        this.hasKeydownListener = false;
    }

    disableScroll() {
        const root = document.documentElement;
        const count = Number.parseInt(root.dataset.uiSheetOpenCount || '0', 10) || 0;
        const next = count + 1;

        root.dataset.uiSheetOpenCount = String(next);

        if (count === 0) {
            root.classList.add('overflow-hidden');
        }
    }

    enableScroll() {
        const root = document.documentElement;
        const count = Number.parseInt(root.dataset.uiSheetOpenCount || '0', 10) || 0;
        const next = Math.max(count - 1, 0);

        if (next === 0) {
            root.classList.remove('overflow-hidden');
            delete root.dataset.uiSheetOpenCount;
        } else {
            root.dataset.uiSheetOpenCount = String(next);
        }
    }

    ensureContentId(content, index) {
        if (!content.id) {
            content.id = `${this.sheetId}-content-${index + 1}`;
        }
    }

    ensureAriaAttributes(content) {
        const title = content.querySelector('[data-slot="sheet-title"]');

        if (title instanceof HTMLElement) {
            if (!title.id) {
                title.id = `${content.id}-title`;
            }

            content.setAttribute('aria-labelledby', title.id);
        }

        const description = content.querySelector('[data-slot="sheet-description"]');

        if (description instanceof HTMLElement) {
            if (!description.id) {
                description.id = `${content.id}-description`;
            }

            content.setAttribute('aria-describedby', description.id);
        } else {
            content.removeAttribute('aria-describedby');
        }
    }

    generateId(prefix) {
        const idPrefix = prefix || 'id';

        if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
            return `${idPrefix}-${crypto.randomUUID()}`;
        }

        return `${idPrefix}-${Math.random().toString(36).slice(2, 10)}`;
    }
}
