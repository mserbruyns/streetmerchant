import {Store} from './store';
import { AmazonLinks } from './helpers/amazon-eu-links';

export const AmazonDe: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: [
        'geben sie die unten angezeigten zeichen ein',
        'geben sie die zeichen unten ein',
      ],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#add-to-cart-button',
      text: ['in den einkaufswagen'],
    },
    maxPrice: {
      container: '.a-text-price > span:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Derzeit nicht verfügbar'],
      },
    ],
  },
  links: AmazonLinks('de'),
  name: 'amazon-de',
};
