'use strict';

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        console.log('Wiring TypeScript controller is okay.');
    }
}
