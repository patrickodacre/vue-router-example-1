import Vue from 'vue'

/* Functional components must be in a .js file. */
const NotFoundComponent = Vue.component('my-component', {
    functional: true,
    // To compensate for the lack of an instance,
    // we are now provided a 2nd context argument.
    render: function(createElement, context) {
        return createElement('div', 'Sorry. Nothing to see here.')
    }
})

export {
    NotFoundComponent
}