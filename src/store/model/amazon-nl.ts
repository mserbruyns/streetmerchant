import {Store} from './store';
import { AmazonLinks } from './helpers/amazon-eu-links';

export const AmazonNl: Store = {
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['voer de karakters in die u hieronder ziet'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['in winkelwagen'],
      },
      {
        container: '#buy-now-button',
        text: ['nu kopen'],
      },
    ],
    maxPrice: {
      container: '.a-text-price > span:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['tijdelijk niet'],
      },
      {
        container: '#outOfStock',
        text: ['we weten niet of en wanneer dit item weer op voorraad is'],
      },
    ],
  },
  links: AmazonLinks('nl'),
  name: 'amazon-nl',
};
