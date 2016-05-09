import {Injectable} from '@angular/core';
import {Klass} from '../models/klass';

var AVAILABLR_CLASSES: Klass[] = [{
    id: 101,
    title: 'CS 101',
    about: `Nullam rhoncus dui felis, et feugiat lorem vehicula sed.
            Fusce feugiat urna ut velit convallis, sit amet dapibus
            metus luctus. Ut justo ante, consequat vitae turpis ac,
            scelerisque interdum diam. Aenean ac lacus luctus,
            posuere eros vitae, vulputate turpis`,
    promo: 'XQu8TTBmGhA',
    poster: 'http://placehold.it/120x68',
    instructor: 'Jon Smith'
  }, {
    id: 102,
    title: 'Math 191',
    about: `Donec hendrerit consectetur nisl, nec aliquam erat cursus
            eget. Cras vel augue pulvinar dui euismod sodales. Sed ac
            hendrerit eros. Vestibulum accumsan semper nunc,
            vel feugiat sapien tempor ac. Donec ornare
            mattis ex et commodo.`,
    promo: 'XQu8TTBmGhA',
    poster: 'http://placehold.it/120x68',
    instructor: 'Jane Doe'
  }, {
    id: 103,
    title: 'Introductory Statistics',
    about: `Nullam viverra mattis nulla, vel feugiat lacus. Morbi vel
            lacus non nisi efficitur pretium. Aliquam ut orci non eros
            commodo gravida sit amet id mi. Curabitur nunc nibh, rhoncus
            a ligula ac, hendrerit convallis nibh. Interdum
            et malesuada fames ac ante.`,
    promo: 'XQu8TTBmGhA',
    poster: 'http://placehold.it/120x68',
    instructor: 'Sarah Woods'
  }, {
    id: 104,
    title: 'Machine Learning',
    about: `Duis ultrices imperdiet odio, sed finibus ante iaculis ac.
            Vestibulum vel mattis sapien. Curabitur faucibus turpis eu
            ante convallis, eu mattis sapien finibus.`,
    promo: 'XQu8TTBmGhA',
    poster: 'http://placehold.it/120x68',
    instructor: 'Matt Dowery'
  }
];

@Injectable()
export class KlassService {
  getAvailableClasses() {
    return AVAILABLR_CLASSES;
  }
}
