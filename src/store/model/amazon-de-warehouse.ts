import {Store} from './store';
import {AmazonLinks} from "./helpers/amazon-eu-links";

export const AmazonDeWarehouse: Store = {
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
      container: '#a-autoid-0-announce',
      text: ['In den Einkaufswagen'],
    },
    maxPrice: {
      container: '.olpOfferPrice',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.a-size-medium',
        text: [
          'Derzeit gibt es keine Verkäufer, die diesen Artikel an Ihren Standort liefern können',
        ],
      },
    ],
  },
  links: AmazonLinks('de', true),
  name: 'amazon-de-warehouse',
};
