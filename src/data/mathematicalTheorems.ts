export interface TheoremSection {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  formula: string;
  formulaMeaning: string;
  theory: string[];
  demonstrationSteps: {
    label: string;
    calculation: string;
    result: string;
    note: string;
  }[];
  truthTableOrMatrix?: {
    headers: string[];
    rows: string[][];
  };
  keyTakeaway: string;
}

export const MATHEMATICAL_THEOREMS: TheoremSection[] = [
  {
    id: 'axiome-fondamental',
    badge: 'Règle de Base',
    title: 'La Formule Universelle du Verbe',
    subtitle: 'La méthode infaillible pour conjuguer n’importe quel verbe',
    formula: 'Verbe = Radical + Terminaison',
    formulaMeaning: 'Tout verbe conjugué se compose de 2 morceaux simples : la base fixe (le Radical) + la fin du mot qui change selon la personne (la Terminaison).',
    theory: [
      'Au lieu d’apprendre des milliers de formes par cœur sans logique, nous décomposons le verbe en 2 blocs : le Radical (R) et la Terminaison (T).',
      'Le groupe du verbe (1er, 2ème ou 3ème) permet de savoir immédiatement comment se comporte le radical.',
      'Règle d’élision : Si le radical commence par une voyelle ou un h muet, "Je" devient automatiquement "J’" (ex: J’aime, J’écoute).'
    ],
    demonstrationSteps: [
      {
        label: '1er Groupe (ex. Parler)',
        calculation: 'Radical = "parler" − "er" = "parl-" | Terminaison (tu) = "-es"',
        result: 'parl + es = parles',
        note: 'Fonctionne à 100% sur plus de 4 000 verbes français !'
      },
      {
        label: '2ème Groupe (ex. Finir)',
        calculation: 'Radical = "finir" − "ir" = "fin-" | Pluriel en "iss" | Terminaison (nous) = "-ons"',
        result: 'fin + iss + ons = finissons',
        note: 'Reconnaissable grâce au son "-issons" avec Nous.'
      },
      {
        label: '3ème Groupe (ex. Vendre)',
        calculation: 'Radical = "vendre" − "re" = "vend-" | Terminaison (il) = "-d"',
        result: 'vend + d = vend',
        note: 'La lettre "d" absorbe le "t" pour faciliter la prononciation.'
      }
    ],
    truthTableOrMatrix: {
      headers: ['Pronom', '1er Groupe (-ER)', '2ème Groupe (-IR)', '3ème Groupe (Standard)'],
      rows: [
        ['Je', '-e', '-is', '-s (ou -x / -e)'],
        ['Tu', '-es', '-is', '-s (ou -x / -es)'],
        ['Il / Elle / On', '-e', '-it', '-t (ou -d / -e)'],
        ['Nous', '-ons', '-issons', '-ons'],
        ['Vous', '-ez', '-issez', '-ez'],
        ['Ils / Elles', '-ent', '-issent', '-ent']
      ]
    },
    keyTakeaway: 'Une fois le radical isolé, conjuguer revient simplement à ajouter la terminaison de la personne voulue.'
  },
  {
    id: 'theoreme-imparfait',
    badge: 'Règle d’Or #1',
    title: 'La Règle Magique de l’Imparfait (Le Secret de "Nous")',
    subtitle: 'Une astuce infaillible pour 99.9% des verbes français',
    formula: 'Radical = (Forme de Nous au présent) − "ons"',
    formulaMeaning: 'Prenez la forme du verbe avec "Nous" au présent, coupez "ons", et vous avez le radical parfait pour tout l’imparfait.',
    theory: [
      'Cette règle résout en 2 secondes tous les verbes difficiles du 3ème groupe (prendre, faire, boire, croire, etc.).',
      'Les terminaisons de l’imparfait sont toujours les mêmes pour TOUS les verbes sans exception : -ais, -ais, -ait, -ions, -iez, -aient.',
      'Une seule exception dans toute la langue française : le verbe ÊTRE, dont le radical d’imparfait est "ét-" (J’étais, tu étais...). Même pour Être, les terminaisons sont 100% normales !'
    ],
    demonstrationSteps: [
      {
        label: 'Verbe PRENDRE',
        calculation: 'Présent avec Nous : "prenons" ⟶ On enlève "ons" ⟶ Radical = "pren-"',
        result: 'pren + ais = prenais ; pren + ions = prenions',
        note: 'Aucun besoin d’apprendre par cœur ! Trouvé en 1 seconde.'
      },
      {
        label: 'Verbe FAIRE',
        calculation: 'Présent avec Nous : "faisons" ⟶ On enlève "ons" ⟶ Radical = "fais-"',
        result: 'fais + ait = faisait ; fais + iez = faisiez',
        note: 'Le son [z] écrit "s" est automatiquement conservé.'
      },
      {
        label: 'Verbe BOIRE',
        calculation: 'Présent avec Nous : "buvons" ⟶ On enlève "ons" ⟶ Radical = "buv-"',
        result: 'buv + ais = buvais ; buv + aient = buvaient',
        note: 'Le passage de "oi" à "u" est automatique grâce à "nous buvons".'
      },
      {
        label: 'Verbe CROIRE',
        calculation: 'Présent avec Nous : "croyons" ⟶ On enlève "ons" ⟶ Radical = "croy-"',
        result: 'croy + ions = croyions',
        note: 'Résout même le piège du double son avec "y" et "i" !'
      }
    ],
    truthTableOrMatrix: {
      headers: ['Pronom', 'Calcul du Radical', 'Terminaison Invariable', 'Résultat (ex. Savoir)'],
      rows: [
        ['Je', 'savons − ons = sav-', '-ais', 'savais'],
        ['Tu', 'savons − ons = sav-', '-ais', 'savais'],
        ['Il / Elle', 'savons − ons = sav-', '-ait', 'savait'],
        ['Nous', 'savons − ons = sav-', '-ions', 'savions'],
        ['Vous', 'savons − ons = sav-', '-iez', 'saviez'],
        ['Ils / Elles', 'savons − ons = sav-', '-aient', 'savaient']
      ]
    },
    keyTakeaway: 'Retenez la règle : "Forme de Nous au présent" − "ons" = Radical de l’imparfait. Vous maîtrisez tous les imparfaits français !'
  },
  {
    id: 'theoreme-futur-conditionnel',
    badge: 'Règle d’Or #2',
    title: 'Le Lien Simple entre Futur et Conditionnel',
    subtitle: 'Un même radical, deux terminaisons faciles',
    formula: 'Futur = Radical du Futur + Terminaisons de Avoir | Conditionnel = Radical du Futur + Terminaisons de l’Imparfait',
    formulaMeaning: 'Le Futur et le Conditionnel partagent exactement la même base ! Si vous connaissez le futur, vous connaissez déjà le conditionnel.',
    theory: [
      'D’où viennent les terminaisons du Futur ? Elles viennent tout simplement du verbe AVOIR au présent : (j’)ai ⟶ -ai, (tu) as ⟶ -as, (il) a ⟶ -a, (nous) avons ⟶ -ons, (vous) avez ⟶ -ez, (ils) ont ⟶ -ont.',
      'Le Conditionnel utilise la même base que le futur, mais avec les terminaisons de l’Imparfait (-ais, -ais, -ait, -ions, -iez, -aient).',
      'Exemple : Chanter (base) + ai = Je chanterai (Futur) | Chanter (base) + ais = Je chanterais (Conditionnel).'
    ],
    demonstrationSteps: [
      {
        label: 'Verbe CHANTER',
        calculation: 'Radical = "chanter-" | Terminaison Futur (tu) = "-as" | Terminaison Conditionnel (tu) = "-ais"',
        result: 'Futur : tu chanteras | Conditionnel : tu chanterais',
        note: 'Même radical "chanter-", seule la terminaison change.'
      },
      {
        label: 'Verbe VOULOIR',
        calculation: 'Radical = "voudr-" | Terminaison Futur (nous) = "-ons" | Terminaison Conditionnel (nous) = "-ions"',
        result: 'Futur : nous voudrons | Conditionnel : nous voudrions',
        note: 'Le radical "voudr-" sert aux 2 temps sans exception.'
      },
      {
        label: 'Verbe POUVOIR',
        calculation: 'Radical = "pourr-" | Terminaison Futur (je) = "-ai" | Terminaison Conditionnel (je) = "-ais"',
        result: 'Futur : je pourrai | Conditionnel : je pourrais',
        note: 'Distingue l’action certaine ("je pourrai") du souhait ("je pourrais").'
      }
    ],
    truthTableOrMatrix: {
      headers: ['Pronom', 'Terminaisons Futur (Avoir)', 'Terminaisons Conditionnel (Imparfait)'],
      rows: [
        ['Je', '-ai (comme j’ai)', '-ais'],
        ['Tu', '-as (comme tu as)', '-ais'],
        ['Il / Elle', '-a (comme il a)', '-ait'],
        ['Nous', '-ons (comme nous avons)', '-ions'],
        ['Vous', '-ez (comme vous avez)', '-iez'],
        ['Ils / Elles', '-ont (comme ils ont)', '-aient']
      ]
    },
    keyTakeaway: 'Le Futur et le Conditionnel ont toujours le même radical. Changez seulement la terminaison !'
  },
  {
    id: 'theoreme-subjonctif',
    badge: 'Règle d’Or #3',
    title: 'La Règle des 2 Familles du Subjonctif',
    subtitle: 'Comment former le subjonctif sans jamais se tromper',
    formula: 'Pour (je, tu, il, ils) : base de "Ils" au présent | Pour (nous, vous) : base de "Nous" au présent',
    formulaMeaning: 'Le Subjonctif présent n’a aucun piège : 4 personnes viennent de la forme "Ils" au présent, et 2 personnes viennent de la forme "Nous" au présent.',
    theory: [
      'Pourquoi dit-on "que je boive" mais "que nous buvions" ? Parce que "Ils boivent" donne la base "boiv-", alors que "Nous buvons" donne la base "buv-".',
      'Cette distinction simple explique tous les verbes au subjonctif !',
      'Les terminaisons du subjonctif sont simples : -e, -es, -e, -ions, -iez, -ent. (Remarquez que pour Nous et Vous, ce sont les terminaisons de l’imparfait).'
    ],
    demonstrationSteps: [
      {
        label: 'Verbe PRENDRE',
        calculation: 'Ils prennent ⟶ base "prenn-" | Nous prenons ⟶ base "pren-"',
        result: 'que je prenne, qu’ils prennent | que nous prenions, que vous preniez',
        note: 'La double lettre "nn" s’explique naturellement par la prononciation.'
      },
      {
        label: 'Verbe VENIR',
        calculation: 'Ils viennent ⟶ base "vienn-" | Nous venons ⟶ base "ven-"',
        result: 'que je vienne, qu’ils viennent | que nous venions, que vous veniez',
        note: 'La règle fonctionne toujours de la même manière.'
      }
    ],
    truthTableOrMatrix: {
      headers: ['Pronom', 'Base utilisée', 'Terminaison', 'Exemple (Boire)'],
      rows: [
        ['que je', 'Base de "Ils" (boiv-)', '-e', 'que je boive'],
        ['que tu', 'Base de "Ils" (boiv-)', '-es', 'que tu boives'],
        ['qu’il / elle', 'Base de "Ils" (boiv-)', '-e', 'qu’il boive'],
        ['que nous', 'Base de "Nous" (buv-)', '-ions', 'que nous buvions'],
        ['que vous', 'Base de "Nous" (buv-)', '-iez', 'que vous buviez'],
        ['qu’ils / elles', 'Base de "Ils" (boiv-)', '-ent', 'qu’ils boivent']
      ]
    },
    keyTakeaway: 'Le subjonctif = 4 personnes calquées sur "Ils" au présent + 2 personnes calquées sur "Nous" au présent.'
  },
  {
    id: 'theoreme-temps-composes',
    badge: 'Règle d’Or #4',
    title: 'Les Temps Composés & la Règle d’Accord (ÊTRE vs AVOIR)',
    subtitle: 'Comment choisir entre Être et Avoir au passé composé et accorder sans faute',
    formula: 'Passé Composé = Auxiliaire au présent (ÊTRE ou AVOIR) + Participe Passé',
    formulaMeaning: 'La majorité des verbes d’action utilisent AVOIR. Les verbes de mouvement, d’état ("La Maison d’Être") et tous les verbes pronominaux utilisent obligatoirement ÊTRE.',
    theory: [
      'Présent de l’auxiliaire + Participe = Passé Composé (ex: j’ai mangé, je suis parti).',
      'Imparfait de l’auxiliaire + Participe = Plus-que-parfait (ex: j’avais mangé, j’étais parti).',
      'Qui prend l’auxiliaire ÊTRE ? 1) Les verbes de mouvement et d’état (La Maison d’Être : partir, arriver, aller, venir, sortir, entrer, monter, descendre, rester, tomber, naître, mourir, etc.). 2) TOUS les verbes pronominaux (se laver, se lever, s’amuser...).',
      'Règle d’or de l’accord avec ÊTRE : Le participe passé s’accorde TOUJOURS en genre (+e au féminin) et en nombre (+s au pluriel) avec le Sujet.',
      'Règle avec AVOIR : Le participe passé ne s’accorde JAMAIS avec le sujet. Il s’accorde uniquement avec le COD si celui-ci est placé AVANT le verbe.'
    ],
    demonstrationSteps: [
      {
        label: 'Verbe PARTIR (Auxiliaire ÊTRE - Mouvement)',
        calculation: 'Sujet "Elle" (fém. sing.) + Auxiliaire ÊTRE "est" + Participe accordé "parti" + "e"',
        result: 'Elle est partie',
        note: 'Le "e" marque le féminin car le sujet est "Elle".'
      },
      {
        label: 'Verbe ARRIVER (Auxiliaire ÊTRE - Pluriel)',
        calculation: 'Sujet "Ils" (masc. plur.) + Auxiliaire ÊTRE "sont" + Participe accordé "arrivé" + "s"',
        result: 'Ils sont arrivés (ou "Elles sont arrivées")',
        note: 'Le "s" (ou "es") marque le pluriel automatiquement.'
      },
      {
        label: 'Verbe PARLER (Auxiliaire AVOIR - Action)',
        calculation: 'Sujet "Elle" + Auxiliaire AVOIR "a" + Participe invariable "parlé"',
        result: 'Elle a parlé (pas de "e" final)',
        note: 'Avec Avoir, aucun accord avec le sujet.'
      },
      {
        label: 'Accord AVOIR avec COD antécédent',
        calculation: '"Les fleurs" (fém. plur.) + que + "j’ai cueillies"',
        result: 'Les fleurs que j’ai cueillies (+es)',
        note: 'Le COD "les fleurs" est placé avant le verbe ⟶ accord avec le COD.'
      }
    ],
    truthTableOrMatrix: {
      headers: ['Auxiliaire', 'Verbes concernés', 'Accord avec le Sujet', 'Exemples clés'],
      rows: [
        ['ÊTRE (🏠)', 'Maison d’Être (16 verbes) + Tous les pronominaux (se...)', 'OUI (Genre et Nombre du Sujet)', 'Elle est partie, ils sont arrivés, elle s’est lavée'],
        ['AVOIR', 'Tous les autres verbes (95% des verbes d’action)', 'NON (Invariable avec le sujet)', 'Elle a parlé, ils ont mangé, j’ai fini'],
        ['AVOIR + COD avant', 'Quand le COD précède le verbe (que, les, l’...)', 'Accord avec le COD antécédent', 'La lettre que j’ai écrite, les pommes qu’il a mangées']
      ]
    },
    keyTakeaway: 'Avec ÊTRE (mouvement, état, pronominal) : accord obligatoire avec le sujet ! Avec AVOIR : pas d’accord avec le sujet.'
  },
  {
    id: 'theoreme-passe-simple',
    badge: 'Règle d’Or #5',
    title: 'Les 4 Familles du Passé Simple',
    subtitle: 'Comment reconnaître facilement les terminaisons du passé simple',
    formula: '4 Familles de Terminaisons : en A, en I, en U ou en IN',
    formulaMeaning: 'Le passé simple se divise en 4 familles selon la voyelle principale de la terminaison.',
    theory: [
      '1. Famille en A (1er groupe en -er) : -ai, -as, -a, -âmes, -âtes, -èrent',
      '2. Famille en I (2ème groupe et certains verbes du 3ème) : -is, -is, -it, -îmes, -îtes, -irent',
      '3. Famille en U (Verbes du 3ème groupe comme avoir, savoir, pouvoir) : -us, -us, -ut, -ûmes, -ûtes, -urent',
      '4. Famille en IN (Verbes de la famille Venir et Tenir) : -ins, -ins, -int, -înmes, -întes, -inrent'
    ],
    demonstrationSteps: [
      {
        label: 'Famille en A (ex. Aimer)',
        calculation: 'Radical "aim-" + Terminaisons en A',
        result: 'j’aimai, tu aimas, il aima, nous aimâmes, vous aimâtes, ils aimèrent',
        note: 'Accent circonflexe sur le "â" pour nous et vous.'
      },
      {
        label: 'Famille en I (ex. Finir)',
        calculation: 'Radical "fin-" + Terminaisons en I',
        result: 'je finis, tu finis, il finit, nous finîmes, vous finîtes, ils finirent',
        note: 'Pour le 2ème groupe, le singulier s’écrit comme au présent !'
      },
      {
        label: 'Famille en U (ex. Savoir)',
        calculation: 'Radical "s-" + Terminaisons en U',
        result: 'je sus, tu sus, il sut, nous sûmes, vous sûtes, ils surent',
        note: 'Formes courtes construites autour de la lettre "u".'
      },
      {
        label: 'Famille en IN (ex. Venir)',
        calculation: 'Radical "v-" + Terminaisons en IN',
        result: 'je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent',
        note: 'Réservé aux verbes comme venir, tenir, revenir, retenir...'
      }
    ],
    keyTakeaway: 'Repérez la voyelle clé (a, i, u ou in) et appliquez les terminaisons correspondantes sans hésitation.'
  }
];
