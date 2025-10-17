import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['trigger', 'content'];

    static values = {
        open: { type: Boolean, default: false },
    };

    connect() {
        this.collapsibleId = this.element.id || this.generateId('collapsible');

        if (!this.element.id) {
            this.element.id = this.collapsibleId;
        }

        this.contentTargets.forEach((content, index) => {
            this.ensureContentId(content, index);
        });

        this.applyState(this.openValue);
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
        const ariaExpanded = isOpen ? 'true' : 'false';
        const ariaHidden = isOpen ? 'false' : 'true';
        const contentId = this.contentTargets[0]?.id;

        this.element.dataset.state = state;

        this.triggerTargets.forEach((trigger) => {
            trigger.dataset.state = state;
            trigger.setAttribute('aria-expanded', ariaExpanded);

            if (contentId) {
                trigger.setAttribute('aria-controls', contentId);
            }
        });

        this.contentTargets.forEach((content, index) => {
            content.dataset.state = state;
            content.hidden = !isOpen;
            content.setAttribute('aria-hidden', ariaHidden);
            this.ensureContentId(content, index);
        });
    }

    ensureContentId(content, index) {
        if (!content.id) {
            content.id = `${this.collapsibleId}-content-${index + 1}`;
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
