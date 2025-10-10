import { Component } from '@angular/core';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Cta } from '../cta/cta';
import { Faq } from '../faq/faq';
import { Feature } from '../feature/feature';
import { FeaturesAlt } from '../features-alt/features-alt';
import { Hero } from '../hero/hero';
import { Portfolio } from '../portfolio/portfolio';
import { Pricing } from '../pricing/pricing';
import { Services } from '../services/services';
import { Stats } from '../stats/stats';
import { Team } from '../team/team';

@Component({
  selector: 'app-index',
  imports: [Hero, About, Services, Portfolio, Team, Contact, Stats, Feature, FeaturesAlt, Cta, Faq, Pricing,],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

}
