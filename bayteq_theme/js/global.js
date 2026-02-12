/**
 * @file
 * Global JavaScript for Bayteq theme.
 */

(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.bayteqTheme = {
    attach: function (context, settings) {
      
      // Smooth scroll for anchor links
      const anchorLinks = once('anchor-link', 'a[href^="#"]', context);
      anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });

    }
  };

})(Drupal, once);
