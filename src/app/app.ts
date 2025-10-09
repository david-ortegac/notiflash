import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Cta } from './components/cta/cta';
import { Faq } from './components/faq/faq';
import { FeaturesAlt } from './components/features-alt/features-alt';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Portfolio } from './components/portfolio/portfolio';
import { Pricing } from './components/pricing/pricing';
import { Services } from './components/services/services';
import { Stats } from './components/stats/stats';
import { Team } from './components/team/team';
import { Feature } from './components/feature/feature';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Services, Portfolio, Team, Contact, Stats, Feature, FeaturesAlt, Cta, Faq, Pricing, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('notiflash');
}
