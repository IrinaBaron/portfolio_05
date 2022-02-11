"use strict";function applyFocusVisiblePolyfill(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(d(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var n,o,u;d(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(u=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;d(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var event;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{event=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(event=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(event)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvY3VzLXZpc2libGUuanMiXSwibmFtZXMiOlsiYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCIsInNjb3BlIiwiaGFkS2V5Ym9hcmRFdmVudCIsImhhZEZvY3VzVmlzaWJsZVJlY2VudGx5IiwiaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0IiwidGV4dCIsImlucHV0VHlwZXNBbGxvd2xpc3QiLCJzZWFyY2giLCJ1cmwiLCJ0ZWwiLCJlbWFpbCIsInBhc3N3b3JkIiwibnVtYmVyIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsInRpbWUiLCJkYXRldGltZSIsImlzVmFsaWRGb2N1c1RhcmdldCIsImVsIiwiZG9jdW1lbnQiLCJub2RlTmFtZSIsImNsYXNzTGlzdCIsImFkZEZvY3VzVmlzaWJsZUNsYXNzIiwiY29udGFpbnMiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJvblBvaW50ZXJEb3duIiwiZSIsImFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkluaXRpYWxQb2ludGVyTW92ZSIsInRhcmdldCIsInRvTG93ZXJDYXNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycyIsIm1ldGFLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiYWN0aXZlRWxlbWVudCIsInZpc2liaWxpdHlTdGF0ZSIsInR5cGUiLCJ0YWdOYW1lIiwicmVhZE9ubHkiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImhhc0F0dHJpYnV0ZSIsIndpbmRvdyIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJob3N0IiwiRE9DVU1FTlRfTk9ERSIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJlcnJvciIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6ImFBS0Es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QUksUUEzRUFhLGFBQUEsOEJBRUYxQixFQUFHRyxVQUFVeUIsT0FBTyxpQkFDcEI1QixFQUFHNkIsZ0JBQWdCLGlDQStKckIsR0FRQS9DLEVBQUFnRCxXQUFBQyxLQUFBQyx3QkFBQWxELEVBQUFtRCxLQUdFbkQsRUFBQW1ELEtBQUExQixhQUFBLHdCQUFBLElBQ0F6QixFQUFBZ0QsV0FBQUMsS0FBQUcsZ0JBQ0FwRCxTQUFNbUQsZ0JBQWtCOUIsVUFBQUcsSUFBQSxvQkFKMUJMLFNBS1duQixnQkFBQXlCLGFBQXdCMkIsd0JBQWUsS0FTcEQsR0FBc0Isb0JBQVhQLFFBQThDLG9CQUFiMUIsU0FBMEIsQ0FRcEUsSUFBSWtDLE1BTkpSLE9BQUE5QywwQkFBQUEsMEJBUUEsSUFBQXNELE1BQUksSUFBQUMsWUFBQSxnQ0FDRkQsTUFBS0UsSUFFTEYsTUFBQWxDLFNBQUFxQyxZQUFBLGdCQUNLQyxnQkFBWUQsZ0NBQWpCLEdBQUEsRUFBQSxJQUlGWCxPQUFPYSxjQUFjTCxPQUdDLG9CQUFibEMsVUFFVHBCLDBCQUFBb0IiLCJmaWxlIjoiZm9jdXMtdmlzaWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXBwbGllcyB0aGUgOmZvY3VzLXZpc2libGUgcG9seWZpbGwgYXQgdGhlIGdpdmVuIHNjb3BlLlxuICogQSBzY29wZSBpbiB0aGlzIGNhc2UgaXMgZWl0aGVyIHRoZSB0b3AtbGV2ZWwgRG9jdW1lbnQgb3IgYSBTaGFkb3cgUm9vdC5cbiAqXG4gKiBAcGFyYW0geyhEb2N1bWVudHxTaGFkb3dSb290KX0gc2NvcGVcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxuICovXG5mdW5jdGlvbiBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKHNjb3BlKSB7XG4gIHZhciBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gIHZhciBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSBudWxsO1xuXG4gIHZhciBpbnB1dFR5cGVzQWxsb3dsaXN0ID0ge1xuICAgIHRleHQ6IHRydWUsXG4gICAgc2VhcmNoOiB0cnVlLFxuICAgIHVybDogdHJ1ZSxcbiAgICB0ZWw6IHRydWUsXG4gICAgZW1haWw6IHRydWUsXG4gICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgbnVtYmVyOiB0cnVlLFxuICAgIGRhdGU6IHRydWUsXG4gICAgbW9udGg6IHRydWUsXG4gICAgd2VlazogdHJ1ZSxcbiAgICB0aW1lOiB0cnVlLFxuICAgIGRhdGV0aW1lOiB0cnVlLFxuICAgICdkYXRldGltZS1sb2NhbCc6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZWdhY3kgYnJvd3NlcnMgYW5kIGlmcmFtZXMgd2hpY2ggc29tZXRpbWVzIGZvY3VzXG4gICAqIGVsZW1lbnRzIGxpa2UgZG9jdW1lbnQsIGJvZHksIGFuZCBub24taW50ZXJhY3RpdmUgU1ZHLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqL1xuICBmdW5jdGlvbiBpc1ZhbGlkRm9jdXNUYXJnZXQoZWwpIHtcbiAgICBpZiAoXG4gICAgICBlbCAmJlxuICAgICAgZWwgIT09IGRvY3VtZW50ICYmXG4gICAgICBlbC5ub2RlTmFtZSAhPT0gJ0hUTUwnICYmXG4gICAgICBlbC5ub2RlTmFtZSAhPT0gJ0JPRFknICYmXG4gICAgICAnY2xhc3NMaXN0JyBpbiBlbCAmJlxuICAgICAgJ2NvbnRhaW5zJyBpbiBlbC5jbGFzc0xpc3RcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICAgKiBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgYmVpbmcgYWRkZWQsIGkuZS4gd2hldGhlciBpdCBzaG91bGQgYWx3YXlzIG1hdGNoXG4gICAqIGA6Zm9jdXMtdmlzaWJsZWAgd2hlbiBmb2N1c2VkLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlbCkge1xuICAgIHZhciB0eXBlID0gZWwudHlwZTtcbiAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dFR5cGVzQWxsb3dsaXN0W3R5cGVdICYmICFlbC5yZWFkT25seSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBpZiBpdCB3YXMgbm90IGFkZGVkIGJ5XG4gICAqIHRoZSBhdXRob3IuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICovXG4gIGZ1bmN0aW9uIGFkZEZvY3VzVmlzaWJsZUNsYXNzKGVsKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMtdmlzaWJsZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXZpc2libGUnKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3RcbiAgICogb3JpZ2luYWxseSBhZGRlZCBieSB0aGUgYXV0aG9yLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVGb2N1c1Zpc2libGVDbGFzcyhlbCkge1xuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgbW9zdCByZWNlbnQgdXNlciBpbnRlcmFjdGlvbiB3YXMgdmlhIHRoZSBrZXlib2FyZDtcbiAgICogYW5kIHRoZSBrZXkgcHJlc3MgZGlkIG5vdCBpbmNsdWRlIGEgbWV0YSwgYWx0L29wdGlvbiwgb3IgY29udHJvbCBrZXk7XG4gICAqIHRoZW4gdGhlIG1vZGFsaXR5IGlzIGtleWJvYXJkLiBPdGhlcndpc2UsIHRoZSBtb2RhbGl0eSBpcyBub3Qga2V5Ym9hcmQuXG4gICAqIEFwcGx5IGBmb2N1cy12aXNpYmxlYCB0byBhbnkgY3VycmVudCBhY3RpdmUgZWxlbWVudCBhbmQga2VlcCB0cmFja1xuICAgKiBvZiBvdXIga2V5Ym9hcmQgbW9kYWxpdHkgc3RhdGUgd2l0aCBgaGFkS2V5Ym9hcmRFdmVudGAuXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZVxuICAgKi9cbiAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1ZhbGlkRm9jdXNUYXJnZXQoc2NvcGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGFkZEZvY3VzVmlzaWJsZUNsYXNzKHNjb3BlLmFjdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGF0IGFueSBwb2ludCBhIHVzZXIgY2xpY2tzIHdpdGggYSBwb2ludGluZyBkZXZpY2UsIGVuc3VyZSB0aGF0IHdlIGNoYW5nZVxuICAgKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICAgKiBUaGlzIGF2b2lkcyB0aGUgc2l0dWF0aW9uIHdoZXJlIGEgdXNlciBwcmVzc2VzIGEga2V5IG9uIGFuIGFscmVhZHkgZm9jdXNlZFxuICAgKiBlbGVtZW50LCBhbmQgdGhlbiBjbGlja3Mgb24gYSBkaWZmZXJlbnQgZWxlbWVudCwgZm9jdXNpbmcgaXQgd2l0aCBhXG4gICAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICovXG4gIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZSkge1xuICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBgZm9jdXNgLCBhZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgdGFyZ2V0IGlmOlxuICAgKiAtIHRoZSB0YXJnZXQgcmVjZWl2ZWQgZm9jdXMgYXMgYSByZXN1bHQgb2Yga2V5Ym9hcmQgbmF2aWdhdGlvbiwgb3JcbiAgICogLSB0aGUgZXZlbnQgdGFyZ2V0IGlzIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGxpa2VseSByZXF1aXJlIGludGVyYWN0aW9uXG4gICAqICAgdmlhIHRoZSBrZXlib2FyZCAoZS5nLiBhIHRleHQgYm94KVxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqL1xuICBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICAvLyBQcmV2ZW50IElFIGZyb20gZm9jdXNpbmcgdGhlIGRvY3VtZW50IG9yIEhUTUwgZWxlbWVudC5cbiAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaGFkS2V5Ym9hcmRFdmVudCB8fCBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlLnRhcmdldCkpIHtcbiAgICAgIGFkZEZvY3VzVmlzaWJsZUNsYXNzKGUudGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gYGJsdXJgLCByZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSB0YXJnZXQuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICovXG4gIGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1cy12aXNpYmxlJykgfHxcbiAgICAgIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJylcbiAgICApIHtcbiAgICAgIC8vIFRvIGRldGVjdCBhIHRhYi93aW5kb3cgc3dpdGNoLCB3ZSBsb29rIGZvciBhIGJsdXIgZXZlbnQgZm9sbG93ZWRcbiAgICAgIC8vIHJhcGlkbHkgYnkgYSB2aXNpYmlsaXR5IGNoYW5nZS5cbiAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAvLyByZWd1bGFyIGZvY3VzIGNoYW5nZS5cbiAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHJlbW92ZUZvY3VzVmlzaWJsZUNsYXNzKGUudGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIHVzZXIgY2hhbmdlcyB0YWJzLCBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBwcmV2aW91c2x5XG4gICAqIGZvY3VzZWQgZWxlbWVudCBoYWQgLmZvY3VzLXZpc2libGUuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICovXG4gIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZShlKSB7XG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIC8vIElmIHRoZSB0YWIgYmVjb21lcyBhY3RpdmUgYWdhaW4sIHRoZSBicm93c2VyIHdpbGwgaGFuZGxlIGNhbGxpbmcgZm9jdXNcbiAgICAgIC8vIG9uIHRoZSBlbGVtZW50IChTYWZhcmkgYWN0dWFsbHkgY2FsbHMgaXQgdHdpY2UpLlxuICAgICAgLy8gSWYgdGhpcyB0YWIgY2hhbmdlIGNhdXNlZCBhIGJsdXIgb24gYW4gZWxlbWVudCB3aXRoIGZvY3VzLXZpc2libGUsXG4gICAgICAvLyByZS1hcHBseSB0aGUgY2xhc3Mgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyBiYWNrIHRvIHRoZSB0YWIuXG4gICAgICBpZiAoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkpIHtcbiAgICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgICB9XG4gICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZ3JvdXAgb2YgbGlzdGVuZXJzIHRvIGRldGVjdCB1c2FnZSBvZiBhbnkgcG9pbnRpbmcgZGV2aWNlcy5cbiAgICogVGhlc2UgbGlzdGVuZXJzIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgcG9seWZpbGwgZmlyc3QgbG9hZHMsIGFuZCBhbnl0aW1lXG4gICAqIHRoZSB3aW5kb3cgaXMgYmx1cnJlZCwgc28gdGhhdCB0aGV5IGFyZSBhY3RpdmUgd2hlbiB0aGUgd2luZG93IHJlZ2FpbnNcbiAgICogZm9jdXMuXG4gICAqL1xuICBmdW5jdGlvbiBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHBvbGZ5aWxsIGZpcnN0IGxvYWRzLCBhc3N1bWUgdGhlIHVzZXIgaXMgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAqIElmIGFueSBldmVudCBpcyByZWNlaXZlZCBmcm9tIGEgcG9pbnRpbmcgZGV2aWNlIChlLmcuIG1vdXNlLCBwb2ludGVyLFxuICAgKiB0b3VjaCksIHR1cm4gb2ZmIGtleWJvYXJkIG1vZGFsaXR5LlxuICAgKiBUaGlzIGFjY291bnRzIGZvciBzaXR1YXRpb25zIHdoZXJlIGZvY3VzIGVudGVycyB0aGUgcGFnZSBmcm9tIHRoZSBVUkwgYmFyLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqL1xuICBmdW5jdGlvbiBvbkluaXRpYWxQb2ludGVyTW92ZShlKSB7XG4gICAgLy8gV29yayBhcm91bmQgYSBTYWZhcmkgcXVpcmsgdGhhdCBmaXJlcyBhIG1vdXNlbW92ZSBvbiA8aHRtbD4gd2hlbmV2ZXIgdGhlXG4gICAgLy8gd2luZG93IGJsdXJzLCBldmVuIGlmIHlvdSdyZSB0YWJiaW5nIG91dCBvZiB0aGUgcGFnZS4gwq9cXF8o44OEKV8vwq9cbiAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgJiYgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgLy8gRm9yIHNvbWUga2luZHMgb2Ygc3RhdGUsIHdlIGFyZSBpbnRlcmVzdGVkIGluIGNoYW5nZXMgYXQgdGhlIGdsb2JhbCBzY29wZVxuICAvLyBvbmx5LiBGb3IgZXhhbXBsZSwgZ2xvYmFsIHBvaW50ZXIgaW5wdXQsIGdsb2JhbCBrZXkgcHJlc3NlcyBhbmQgZ2xvYmFsXG4gIC8vIHZpc2liaWxpdHkgY2hhbmdlIHNob3VsZCBhZmZlY3QgdGhlIHN0YXRlIGF0IGV2ZXJ5IHNjb3BlOlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG5cbiAgYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCk7XG5cbiAgLy8gRm9yIGZvY3VzIGFuZCBibHVyLCB3ZSBzcGVjaWZpY2FsbHkgY2FyZSBhYm91dCBzdGF0ZSBjaGFuZ2VzIGluIHRoZSBsb2NhbFxuICAvLyBzY29wZS4gVGhpcyBpcyBiZWNhdXNlIGZvY3VzIC8gYmx1ciBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSB3aXRoaW4gYVxuICAvLyBzaGFkb3cgcm9vdCBhcmUgbm90IHJlLWRpc3BhdGNoZWQgZnJvbSB0aGUgaG9zdCBlbGVtZW50IGlmIGl0IHdhcyBhbHJlYWR5XG4gIC8vIHRoZSBhY3RpdmUgZWxlbWVudCBpbiBpdHMgb3duIHNjb3BlOlxuICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMsIHRydWUpO1xuICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyLCB0cnVlKTtcblxuICAvLyBXZSBkZXRlY3QgdGhhdCBhIG5vZGUgaXMgYSBTaGFkb3dSb290IGJ5IGVuc3VyaW5nIHRoYXQgaXQgaXMgYVxuICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCBhbHNvIGhhcyBhIGhvc3QgcHJvcGVydHkuIFRoaXMgY2hlY2sgY292ZXJzIG5hdGl2ZVxuICAvLyBpbXBsZW1lbnRhdGlvbiBhbmQgcG9seWZpbGwgaW1wbGVtZW50YXRpb24gdHJhbnNwYXJlbnRseS4gSWYgd2Ugb25seSBjYXJlZFxuICAvLyBhYm91dCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCB3ZSBjb3VsZCBqdXN0IGNoZWNrIGlmIHRoZSBzY29wZSB3YXNcbiAgLy8gYW4gaW5zdGFuY2Ugb2YgYSBTaGFkb3dSb290LlxuICBpZiAoc2NvcGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAmJiBzY29wZS5ob3N0KSB7XG4gICAgLy8gU2luY2UgYSBTaGFkb3dSb290IGlzIGEgc3BlY2lhbCBraW5kIG9mIERvY3VtZW50RnJhZ21lbnQsIGl0IGRvZXMgbm90XG4gICAgLy8gaGF2ZSBhIHJvb3QgZWxlbWVudCB0byBhZGQgYSBjbGFzcyB0by4gU28sIHdlIGFkZCB0aGlzIGF0dHJpYnV0ZSB0byB0aGVcbiAgICAvLyBob3N0IGVsZW1lbnQgaW5zdGVhZDpcbiAgICBzY29wZS5ob3N0LnNldEF0dHJpYnV0ZSgnZGF0YS1qcy1mb2N1cy12aXNpYmxlJywgJycpO1xuICB9IGVsc2UgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnanMtZm9jdXMtdmlzaWJsZScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgfVxufVxuXG4vLyBJdCBpcyBpbXBvcnRhbnQgdG8gd3JhcCBhbGwgcmVmZXJlbmNlcyB0byBnbG9iYWwgd2luZG93IGFuZCBkb2N1bWVudCBpblxuLy8gdGhlc2UgY2hlY2tzIHRvIHN1cHBvcnQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHVzZSBjYXNlc1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9mb2N1cy12aXNpYmxlL2lzc3Vlcy8xOTlcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIE1ha2UgdGhlIHBvbHlmaWxsIGhlbHBlciBnbG9iYWxseSBhdmFpbGFibGUuIFRoaXMgY2FuIGJlIHVzZWQgYXMgYSBzaWduYWxcbiAgLy8gdG8gaW50ZXJlc3RlZCBsaWJyYXJpZXMgdGhhdCB3aXNoIHRvIGNvb3JkaW5hdGUgd2l0aCB0aGUgcG9seWZpbGwgZm9yIGUuZy4sXG4gIC8vIGFwcGx5aW5nIHRoZSBwb2x5ZmlsbCB0byBhIHNoYWRvdyByb290OlxuICB3aW5kb3cuYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCA9IGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGw7XG5cbiAgLy8gTm90aWZ5IGludGVyZXN0ZWQgbGlicmFyaWVzIG9mIHRoZSBwb2x5ZmlsbCdzIHByZXNlbmNlLCBpbiBjYXNlIHRoZVxuICAvLyBwb2x5ZmlsbCB3YXMgbG9hZGVkIGxhemlseTpcbiAgdmFyIGV2ZW50O1xuXG4gIHRyeSB7XG4gICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2ZvY3VzLXZpc2libGUtcG9seWZpbGwtcmVhZHknKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgdXNpbmcgQ3VzdG9tRXZlbnQgYXMgYSBjb25zdHJ1Y3RvciBkaXJlY3RseTpcbiAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCgnZm9jdXMtdmlzaWJsZS1wb2x5ZmlsbC1yZWFkeScsIGZhbHNlLCBmYWxzZSwge30pO1xuICB9XG5cbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBBcHBseSB0aGUgcG9seWZpbGwgdG8gdGhlIGdsb2JhbCBkb2N1bWVudCwgc28gdGhhdCBubyBKYXZhU2NyaXB0XG4gIC8vIGNvb3JkaW5hdGlvbiBpcyByZXF1aXJlZCB0byB1c2UgdGhlIHBvbHlmaWxsIGluIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnQ6XG4gIGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwoZG9jdW1lbnQpO1xufVxuIl19

"use strict";var burgerBtn=document.querySelector(".burger"),bodyClass=document.querySelector(".body");burgerBtn.addEventListener("click",(function(){burgerBtn.classList.toggle("active"),document.querySelector(".nav").classList.toggle("active"),bodyClass.classList.toggle("lock")}));var jsTriggers=document.querySelectorAll(".js-tab-trigger"),jsContents=document.querySelectorAll(".js-tab-content");jsTriggers.forEach((function(e){e.addEventListener("click",(function(){var t=this.getAttribute("data-tab"),a=document.querySelector('.js-tab-content[data-tab="'+t+'"]'),r=document.querySelector(".js-tab-trigger.active"),n=document.querySelector(".js-tab-content.active");r.classList.remove("active"),e.classList.add("active"),n.classList.remove("active"),a.classList.add("active")})),e.addEventListener("keyup",(function(t){if("Enter"==t.code){var a=this.getAttribute("data-tab"),r=document.querySelector('.js-tab-content[data-tab="'+a+'"]'),n=document.querySelector(".js-tab-trigger.active"),i=document.querySelector(".js-tab-content.active");n.classList.remove("active"),e.classList.add("active"),i.classList.remove("active"),r.classList.add("active")}}))}));var accordion=function(){var e={},t={},a=function(e){if(e.target.classList.contains("accordion__item-header")){e.preventDefault(),console.log(e.target);var a=e.target.parentElement,r=function(e,t){var a=void 0;return e.forEach((function(e){e.classList.contains(t)&&(a=e)})),a}(t,"show");"Enter"==e.code&&(console.log("ok"),void 0===r?a.classList.add("show"):(r.classList.remove("show"),r!==a&&a.classList.add("show"))),void 0===r?a.classList.add("show"):(r.classList.remove("show"),r!==a&&a.classList.add("show"))}};return{init:function(r){e="string"==typeof r?document.querySelector(r):r,t=e.querySelectorAll(".accordion__item"),e.addEventListener("click",a),e.addEventListener("keyup",a)}}},accordion1=accordion();accordion1.init("#accordion");var nameDiv=document.querySelector(".wrap-name"),surnameDiv=document.querySelector(".wrap-surname"),emailDiv=document.querySelector(".wrap-email"),divWrap=document.querySelector(".form__wrap"),input=document.querySelector(".contacts__input"),nameInput=document.querySelector(".name"),surnameInput=document.querySelector(".surname"),emailInput=document.querySelector(".email"),btn=document.querySelector(".form__btn"),mailformat=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,simbol=/^[а-яА-ЯёЁ\s]+$/,div=document.createElement("div"),div1=document.createElement("div"),div2=document.createElement("div");function validateName(){div.classList.add("validate"),div2.classList.add("validate"),nameDiv.append(div),surnameDiv.append(div2),""==surnameInput.value?(div2.innerHTML="Enter your Last Name",surnameInput.style.borderColor="#FF3030"):surnameInput.value.match(simbol)?(div2.innerHTML="Invalid format",surnameInput.style.borderColor="#FF3030"):surnameInput.value.match(simbol)||(div2.innerHTML="",surnameInput.style.borderColor="transparent"),""==nameInput.value?(div.innerHTML="Enter your First Name",nameInput.style.borderColor="#FF3030"):nameInput.value.match(simbol)?(div.innerHTML="Invalid format",nameInput.style.borderColor="#FF3030"):nameInput.value.match(simbol)||(div.innerHTML="",nameInput.style.borderColor="transparent")}function validateEmail(){if(div1.classList.add("validate"),emailDiv.append(div1),""==emailInput.value)div1.innerHTML="Enter your email",emailInput.style.borderColor="#FF3030";else{if(emailInput.value.match(mailformat))return div1.innerHTML="",emailInput.style.borderColor="transparent",!0;emailInput.value.match(mailformat)||(div1.innerHTML="Invalid format",emailInput.style.borderColor="#FF3030")}}btn.addEventListener("click",(function(e){e.preventDefault();validateName(),validateEmail()}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJvZHlDbGFzcyIsImpzVHJpZ2dlcnMiLCJmb3JFYWNoIiwicXVlcnlTZWxlY3RvckFsbCIsImpzQ29udGVudHMiLCJ0cmlnZ2VyIiwiaWQiLCJ0aGlzIiwiZ2V0QXR0cmlidXRlIiwiY29udGVudCIsImFjdGl2ZVRyaWdnZXIiLCJhY3RpdmVDb250ZW50IiwicmVtb3ZlIiwiYWRkIiwiZSIsImNvZGUiLCJhY2NvcmRpb24iLCJlbGVtZW50IiwiX21haW5FbGVtZW50IiwiX2l0ZW1zIiwiX2FjdGlvbkNsaWNrIiwidGFyZ2V0IiwiY29udGFpbnMiLCJfY29udGVudHMiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsIml0ZW1BY3RpdmUiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsIl9nZXRJdGVtIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRFbGVtZW50IiwiaW5pdCIsIl9zZXR1cExpc3RlbmVycyIsImFjY29yZGlvbjEiLCJkaXZXcmFwIiwiaW5wdXQiLCJuYW1lSW5wdXQiLCJzdXJuYW1lSW5wdXQiLCJidG4iLCJtYWlsZm9ybWF0Iiwic2ltYm9sIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImRpdjEiLCJ2YWxpZE5hbWUiLCJ2YWxpZEVtYWlsIiwidmFsaWRhdGVFbWFpbCIsImRpdjIiLCJpbm5lckhUTUwiLCJzdHlsZSIsInZhbHVlIiwiYm9yZGVyQ29sb3IiLCJtYXRjaCIsImVtYWlsRGl2IiwiZW1haWxJbnB1dCIsImFwcGVuZCIsIm5hbWVEaXYiXSwibWFwcGluZ3MiOiJhQUFBLElBQUFBLFVBQUFDLFNBQUFDLGNBQUEsV0FFTUYsVUFBWUMsU0FBU0MsY0FBYyxTQUd6Q0YsVUFBVUcsaUJBQWlCLFNBQVMsV0FDbENILFVBQVVJLFVBQVVDLE9BQU8sVUFD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Q1ZVLFFBQUtDLE9BQUFBLEtBQ0xYLFdBQUFBLE9BQWFZLE1BUlcsSUFBdEJaLGFBQWFhLE9BV2pCSCxLQUFJWCxVQUFBLHVCQUNGSyxhQUFBUSxNQUFnQkUsWUFBQSxXQUNQZCxhQUFPYyxNQUFoQkMsTUFBOEJaLFNBRmhDTyxLQUdPQyxVQUFJWixpQkFDVEssYUFBQVEsTUFBZ0JFLFlBQWhCLFdBQ1VGLGFBQU1FLE1BQWhCQyxNQUE4QlosVUFGekJPLEtBR0FDLFVBQUtaLEdBQ1ZLLGFBQUFRLE1BQUFFLFlBQUEsZUFLSCxJQUFBZixVQUFBYyxPQVhHVCxJQUFJTyxVQUFZLHdCQWFwQlosVUFBU1UsTUFBQUEsWUFBZ0IsV0FDbEJuRCxVQUFjdUQsTUFBQUUsTUFBbkJaLFNBQ0FhLElBQUFBLFVBQWdCVixpQkFYZFAsVUFBVWEsTUFBTUUsWUFBYyxXQVk1QkcsVUFBQUosTUFBd0JFLE1BQUFaLFVBQzFCRyxJQUFJSyxVQUFKLEdBQ0FNLFVBQVVMLE1BQVZFLFlBQUEsZUFNQVIsU0FBS0ssZ0JBS1IsR0FKR00sS0FBQUEsVUFBV0wsSUFBTUUsWUFFbEJFLFNBQUFFLE9BQUFaLE1BRUYsSUFBQVcsV0FBQUosTUFaR1AsS0FBS0ssVUFBWSxtQkFDakJNLFdBQVdMLE1BQU1FLFlBQWMsY0FDMUIsQ0FBQSxHQUFJRyxXQUFXSixNQUFNRSxNQUFNYixZQUdoQyxPQUZBSSxLQUFLSyxVQUFZLEdBQ2pCTSxXQUFXTCxNQUFNRSxZQUFjLGVBQ3hCLEVBQ0dHLFdBQVdKLE1BQU1FLE1BQU1iLGNBQ2pDSSxLQUFLSyxVQUFZLGlCQUNqQk0sV0FBV0wsTUFBTUUsWUFBYyxZQXpDakNKLElBQUFBLGlCQUFtQixTQUFBLFNBQW5CcEMsR0FDQTZDLEVBQUFBLGlCQUNXRCxlQVRNVCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVyZ2VyLW1lbnUgXG5cbmNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcbmxldCBib2R5Q2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpO1xuXG5idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHNfX3Bob25lJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGJvZHlDbGFzcy5jbGFzc0xpc3QudG9nZ2xlKCdsb2NrJyk7XG59KVxuXG4vLyB0YWJzXG5cbmxldCBqc1RyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXRhYi10cmlnZ2VyJyksXG4gIGpzQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdGFiLWNvbnRlbnQnKTtcblxuanNUcmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7IC8vIDFcbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgLy8gMlxuICAgIC8vINC60LvQuNC6IVxuICAgIGxldCBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpLCAvLyAxXG4gICAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRhYi1jb250ZW50W2RhdGEtdGFiPVwiJyArIGlkICsgJ1wiXScpLCAvLyAyXG4gICAgICBhY3RpdmVUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRhYi10cmlnZ2VyLmFjdGl2ZScpLCAvLyAzXG4gICAgICBhY3RpdmVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRhYi1jb250ZW50LmFjdGl2ZScpOyAvLyA0XG5cbiAgICBhY3RpdmVUcmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyAvLyAxXG4gICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgLy8gMlxuXG4gICAgYWN0aXZlQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgLy8gM1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7IC8vIDRcbiAgfSk7XG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmNvZGUgPT0gJ0VudGVyJykge1xuICAgICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJyksIC8vIDFcbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10YWItY29udGVudFtkYXRhLXRhYj1cIicgKyBpZCArICdcIl0nKSwgLy8gMlxuICAgICAgICBhY3RpdmVUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRhYi10cmlnZ2VyLmFjdGl2ZScpLCAvLyAzXG4gICAgICAgIGFjdGl2ZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdGFiLWNvbnRlbnQuYWN0aXZlJyk7IC8vIDRcblxuICAgICAgYWN0aXZlVHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgLy8gMVxuICAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgLy8gMlxuXG4gICAgICBhY3RpdmVDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyAvLyAzXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAvLyA0XG4gICAgfVxuICB9KVxufSk7XG5cblxuXG4vLyBhY2NvcmRpb25cblxuXG5sZXQgYWNjb3JkaW9uID0gKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGxldCBfZ2V0SXRlbSA9IGZ1bmN0aW9uIChlbGVtZW50cywgY2xhc3NOYW1lKSB7IC8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0Y3Qu9C10LzQtdC90YLQsCDRgSDRg9C60LDQt9Cw0L3QvdGL0Lwg0LrQu9Cw0YHRgdC+0LxcbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtZW50ID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBfbWFpbkVsZW1lbnQgPSB7fSwgLy8gLmFjY29yZGlvblxuICAgICAgX2l0ZW1zID0ge30sIC8vIC5hY2NvcmRpb24taXRlbVxuICAgICAgX2NvbnRlbnRzID0ge307IC8vIC5hY2NvcmRpb24taXRlbS1jb250ZW50XG4gICAgbGV0IF9hY3Rpb25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBcbiAgICAgIFxuICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS1oZWFkZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICBsZXQgaGVhZGVyID0gZS50YXJnZXQsXG4gICAgICAgIGl0ZW0gPSBoZWFkZXIucGFyZW50RWxlbWVudCxcbiAgICAgICAgaXRlbUFjdGl2ZSA9IF9nZXRJdGVtKF9pdGVtcywgJ3Nob3cnKTtcblxuICAgICAgICBpZiAoZS5jb2RlID09ICdFbnRlcicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnb2snKVxuICAgICAgICAgIGlmIChpdGVtQWN0aXZlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgXG4gICAgICAgICAgICBpZiAoaXRlbUFjdGl2ZSAhPT0gaXRlbSkge1xuICBcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGlmIChpdGVtQWN0aXZlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblxuICAgICAgICBpZiAoaXRlbUFjdGl2ZSAhPT0gaXRlbSkge1xuXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuXG4gICAgfSxcbiAgICAgIF9zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBfbWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfYWN0aW9uQ2xpY2spO1xuICAgICAgICBfbWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBfYWN0aW9uQ2xpY2spO1xuICAgICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBfbWFpbkVsZW1lbnQgPSAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQpO1xuICAgICAgICBfaXRlbXMgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpO1xuICAgICAgICBfc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pKCk7XG5cbmxldCBhY2NvcmRpb24xID0gYWNjb3JkaW9uKCk7XG5hY2NvcmRpb24xLmluaXQoJyNhY2NvcmRpb24nKTtcblxuXG5cbi8vIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2J0bicpO1xuXG4vLyBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbG9jaycpO1xuLy8gfSlcblxuLy8gY29uc3Qgc2VhcmNoQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19zcGFuJyk7XG4vLyBzZWFyY2hDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2xvY2snKTtcbi8vIH0pXG4vLyBhYm91dFxuXG5cblxuLy9mb3JtX19pbnB1dFxuXG5jb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXAtbmFtZScpO1xuY29uc3Qgc3VybmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwLXN1cm5hbWUnKTtcbmNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXAtZW1haWwnKTtcbmNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fd3JhcCcpO1xuXG5sZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHNfX2lucHV0Jyk7XG5sZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbmxldCBzdXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VybmFtZScpO1xubGV0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKTtcbmxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnRuJyk7XG5cblxubGV0IG1haWxmb3JtYXQgPSAvXlxcdysoWy0rLiddXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKiQvO1xubGV0IHNpbWJvbCA9IC9eW9CwLdGP0JAt0K/RkdCBXFxzXSskLztcbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxldCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXQgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHZhbGlkTmFtZSA9IHZhbGlkYXRlTmFtZSgpO1xuICBsZXQgdmFsaWRFbWFpbCA9IHZhbGlkYXRlRW1haWwoKTtcblxufSlcblxuXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWUoKSB7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd2YWxpZGF0ZScpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRlJyk7XG4gIG5hbWVEaXYuYXBwZW5kKGRpdik7XG4gIHN1cm5hbWVEaXYuYXBwZW5kKGRpdjIpXG5cbiAgaWYgKHN1cm5hbWVJbnB1dC52YWx1ZSA9PSAnJykge1xuICAgIGRpdjIuaW5uZXJIVE1MID0gJ0VudGVyIHlvdXIgTGFzdCBOYW1lJztcbiAgICBzdXJuYW1lSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0ZGMzAzMCc7XG4gIH0gZWxzZSBpZiAoc3VybmFtZUlucHV0LnZhbHVlLm1hdGNoKHNpbWJvbCkpIHtcbiAgICBkaXYyLmlubmVySFRNTCA9ICdJbnZhbGlkIGZvcm1hdCc7XG4gICAgc3VybmFtZUlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjMwMzAnO1xuICB9IGVsc2UgaWYgKCFzdXJuYW1lSW5wdXQudmFsdWUubWF0Y2goc2ltYm9sKSkge1xuICAgIGRpdjIuaW5uZXJIVE1MID0gJyc7XG4gICAgc3VybmFtZUlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICB9XG4gIGlmIChuYW1lSW5wdXQudmFsdWUgPT0gJycpIHtcbiAgICBkaXYuaW5uZXJIVE1MID0gJ0VudGVyIHlvdXIgRmlyc3QgTmFtZSc7XG4gICAgbmFtZUlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjMwMzAnO1xuICB9IGVsc2UgaWYgKG5hbWVJbnB1dC52YWx1ZS5tYXRjaChzaW1ib2wpKSB7XG4gICAgZGl2LmlubmVySFRNTCA9ICdJbnZhbGlkIGZvcm1hdCc7XG4gICAgbmFtZUlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjMwMzAnO1xuICB9IGVsc2UgaWYgKCFuYW1lSW5wdXQudmFsdWUubWF0Y2goc2ltYm9sKSkge1xuICAgIGRpdi5pbm5lckhUTUwgPSAnJztcbiAgICBuYW1lSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG4gIH1cblxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKCkge1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRlJyk7XG4gIGVtYWlsRGl2LmFwcGVuZChkaXYxKTtcbiAgaWYgKGVtYWlsSW5wdXQudmFsdWUgPT0gJycpIHtcbiAgICBkaXYxLmlubmVySFRNTCA9ICdFbnRlciB5b3VyIGVtYWlsJztcbiAgICBlbWFpbElucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjMwMzAnO1xuICB9IGVsc2UgaWYgKGVtYWlsSW5wdXQudmFsdWUubWF0Y2gobWFpbGZvcm1hdCkpIHtcbiAgICBkaXYxLmlubmVySFRNTCA9ICcnO1xuICAgIGVtYWlsSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSBpZiAoIWVtYWlsSW5wdXQudmFsdWUubWF0Y2gobWFpbGZvcm1hdCkpIHtcbiAgICBkaXYxLmlubmVySFRNTCA9ICdJbnZhbGlkIGZvcm1hdCc7XG4gICAgZW1haWxJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjRkYzMDMwJztcblxuICB9XG5cbn1cblxuIl19
