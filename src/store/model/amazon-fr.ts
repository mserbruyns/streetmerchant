import {Store} from './store';
import { AmazonLinks } from './helpers/amazon-eu-links';

export const AmazonFr: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['ajouter au panier'],
    },
    maxPrice: {
      container: '.a-text-price > span:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Actuellement indisponible'],
      },
    ],
  },
  links: AmazonLinks('fr', false),
  name: 'amazon-fr',
};
