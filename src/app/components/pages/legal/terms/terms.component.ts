import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { Location } from '@angular/common';
import { LocaleService } from '../../../../core/services/locale.service';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent {
  private readonly localeService = inject(LocaleService);
  private readonly location = inject(Location);

  readonly title = computed(() => {
    const locale = this.localeService.locale();
    return locale === 'fr' ? "Conditions d'utilisation" : 'Terms of Service';
  });

  readonly lastUpdated = computed(() => {
    const locale = this.localeService.locale();
    return locale === 'fr'
      ? 'Dernière mise à jour : 15 octobre 2025'
      : 'Last updated: October 15, 2025';
  });

  readonly content = computed(() => {
    const locale = this.localeService.locale();

    if (locale === 'fr') {
      return {
        sections: [
          {
            title: '1. Acceptation des conditions',
            content:
              "En accédant et en utilisant Axioneer NowPlaying, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.",
          },
          {
            title: '2. Description du service',
            content:
              "Axioneer NowPlaying est une application d'overlays temps réel pour OBS, XSplit et tout logiciel de streaming acceptant les sources web. Elle affiche en direct la musique Spotify en cours de lecture ainsi que la couleur dominante extraite de la pochette, via deux overlays séparés et complémentaires.",
          },
          {
            title: '3. Projet Open Source',
            content:
              'Axioneer NowPlaying est un projet open source. Le code source est disponible publiquement et peut être consulté, modifié et redistribué conformément à la licence du projet. Les contributions de la communauté sont bienvenues.',
          },
          {
            title: '4. Compte utilisateur et Spotify',
            content:
              "Pour utiliser Axioneer NowPlaying, vous devez connecter votre compte Spotify. Vous êtes responsable de maintenir la confidentialité de vos identifiants. L'utilisation de Axioneer NowPlaying nécessite un compte Spotify actif (gratuit ou premium).",
          },
          {
            title: '5. Utilisation acceptable',
            content:
              "Axioneer NowPlaying est destiné à un usage personnel pour le streaming et la création de contenu. La monétisation standard des créateurs est autorisée (ex. publicités, abonnements, tips/donations, sponsoring du stream), tant que Axioneer NowPlaying n'est pas revendu ou facturé en tant que produit ou service. Toute exploitation commerciale de Axioneer NowPlaying comme produit/service (ex. revente, location, intégration dans une offre payante ou un SaaS, prestation en agence/événementiel, affichage dans des lieux commerciaux) nécessite une autorisation écrite préalable. Vous devez respecter les conditions et politiques de Spotify applicables.",
          },
          {
            title: '6. Propriété intellectuelle',
            content:
              "Le code source de Axioneer NowPlaying est sous licence open source. Les pochettes d'albums et données musicales affichées appartiennent à leurs propriétaires respectifs et sont fournies via l'API Spotify.",
          },
          {
            title: '7. Intégration Spotify',
            content:
              "Axioneer NowPlaying utilise l'API Spotify pour récupérer les informations de lecture en temps réel. Nous ne stockons pas vos données d'écoute. La disponibilité du service dépend de la disponibilité de l'API Spotify.",
          },
          {
            title: '8. Limitation de responsabilité',
            content:
              'Axioneer NowPlaying est fourni "tel quel" sans garantie d\'aucune sorte. Nous ne serons pas responsables des interruptions de service, des problèmes de compatibilité avec votre logiciel de streaming, ou de tout dommage résultant de l\'utilisation du service.',
          },
          {
            title: '9. Modifications',
            content:
              "Nous nous réservons le droit de modifier ces conditions, les fonctionnalités du service ou d'interrompre Axioneer NowPlaying à tout moment. Les modifications majeures vous seront notifiées.",
          },
          {
            title: '10. Contact',
            content:
              'Pour toute question concernant ces conditions, veuillez nous contacter à legal@nowplaying.axioneer.com',
          },
        ],
      };
    } else {
      return {
        sections: [
          {
            title: '1. Acceptance of Terms',
            content:
              'By accessing and using Axioneer NowPlaying, you agree to be bound by these terms of service. If you do not accept these terms, please do not use our service.',
          },
          {
            title: '2. Service Description',
            content:
              'Axioneer NowPlaying is a real-time overlay application for OBS, XSplit and any streaming software that accepts web sources. It displays live Spotify playback information and the dominant color extracted from album artwork through two separate, complementary overlays.',
          },
          {
            title: '3. Open Source Project',
            content:
              'Axioneer NowPlaying is an open source project. The source code is publicly available and can be viewed, modified and redistributed in accordance with the project license. Community contributions are welcome.',
          },
          {
            title: '4. User Account and Spotify',
            content:
              'To use Axioneer NowPlaying, you must connect your Spotify account. You are responsible for maintaining the confidentiality of your credentials. Using Axioneer NowPlaying requires an active Spotify account (free or premium).',
          },
          {
            title: '5. Acceptable Use',
            content:
              'Axioneer NowPlaying is intended for personal use in streaming and content creation. Standard creator monetization is allowed (e.g., ads, subscriptions, tips/donations, stream sponsorship) provided Axioneer NowPlaying is not resold or charged as a product or service. Any commercial exploitation of Axioneer NowPlaying as a product/service (e.g., reselling, renting, embedding in a paid product or SaaS, agency/event usage, display in commercial venues) requires prior written authorization. You must comply with applicable Spotify terms and policies.',
          },
          {
            title: '6. Intellectual Property',
            content:
              'Axioneer NowPlaying source code is under open source license. Album artwork and music data displayed belong to their respective owners and are provided through the Spotify API.',
          },
          {
            title: '7. Spotify Integration',
            content:
              'Axioneer NowPlaying uses the Spotify API to retrieve real-time playback information. We do not store your listening data. Service availability depends on Spotify API availability.',
          },
          {
            title: '8. Limitation of Liability',
            content:
              'Axioneer NowPlaying is provided "as is" without warranty of any kind. We will not be liable for service interruptions, compatibility issues with your streaming software, or any damages resulting from use of the service.',
          },
          {
            title: '9. Modifications',
            content:
              'We reserve the right to modify these terms, service features or discontinue Axioneer NowPlaying at any time. You will be notified of major changes.',
          },
          {
            title: '10. Contact',
            content:
              'For any questions regarding these terms, please contact us at legal@nowplaying.axioneer.com',
          },
        ],
      };
    }
  });

  readonly backLink = computed(() => {
    const locale = this.localeService.locale();
    return locale === 'fr' ? 'Retour' : 'Back';
  });

  goBack(): void {
    this.location.back();
  }
}
