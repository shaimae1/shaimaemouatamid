import { TenseInfo, TenseKey } from '../types/conjugation';

export const TENSES_INFO: Record<TenseKey, TenseInfo> = {
  present: {
    key: 'present',
    label: 'Présent de l’Indicatif',
    category: 'simple',
    mathFormula: 'Verbe = Radical + Terminaison du groupe',
    formulaDescription: 'On prend le radical et on ajoute la terminaison selon le groupe : 1er groupe (-e, -es, -e, -ons, -ez, -ent), 2ème groupe (-is, -is, -it, -issons, -issez, -issent), 3ème groupe (-s, -s, -t, -ons, -ez, -ent).',
    principle: 'Action qui a lieu en ce moment même.'
  },
  imparfait: {
    key: 'imparfait',
    label: 'Imparfait',
    category: 'simple',
    mathFormula: 'Radical = (Nous au présent) − "ons" + Terminaison',
    formulaDescription: 'Règle magique : Prenez la forme "Nous" au présent, enlevez "ons", et vous avez le radical de tout l’imparfait. Terminaisons invariables pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient. (Seule exception : ÊTRE dont le radical est "ét-").',
    principle: 'Action qui dure dans le passé, habitude ou description.'
  },
  futur_simple: {
    key: 'futur_simple',
    label: 'Futur Simple',
    category: 'simple',
    mathFormula: 'Futur = Radical du futur + Terminaisons de Avoir',
    formulaDescription: 'On prend le radical du futur (souvent l’infinitif entier) et on lui colle les terminaisons du verbe AVOIR au présent : -ai, -as, -a, -ons, -ez, -ont.',
    principle: 'Action certaine qui se produira plus tard.'
  },
  conditionnel_present: {
    key: 'conditionnel_present',
    label: 'Conditionnel Présent',
    category: 'simple',
    mathFormula: 'Conditionnel = Radical du Futur + Terminaisons de l’Imparfait',
    formulaDescription: 'Le mariage parfait : On garde exactement le radical du futur et on lui ajoute les terminaisons de l’imparfait (-ais, -ais, -ait, -ions, -iez, -aient).',
    principle: 'Action dépendante d’une condition ("Si j’avais... je ferais") ou formule de politesse.'
  },
  passe_compose: {
    key: 'passe_compose',
    label: 'Passé Composé',
    category: 'compose',
    mathFormula: 'Passé Composé = Être ou Avoir + Participe Passé',
    formulaDescription: 'Auxiliaire au présent + Participe Passé. Règle d’accord : Avec ÊTRE, on accorde avec le sujet. Avec AVOIR, on accorde uniquement si le COD est placé avant.',
    principle: 'Action passée et achevée.'
  },
  plus_que_parfait: {
    key: 'plus_que_parfait',
    label: 'Plus-que-parfait',
    category: 'compose',
    mathFormula: 'Plus-que-parfait = Être ou Avoir à l’imparfait + Participe Passé',
    formulaDescription: 'L’auxiliaire est mis à l’imparfait (ex: j’avais / j’étais) suivi du participe passé.',
    principle: 'Action passée qui s’est produite avant une autre action passée.'
  },
  subjonctif_present: {
    key: 'subjonctif_present',
    label: 'Subjonctif Présent',
    category: 'subjonctif',
    mathFormula: 'Radical de "Ils" ou "Nous" + Terminaisons (-e, -es, -e, -ions, -iez, -ent)',
    formulaDescription: 'Pour je, tu, il, ils : on prend la base de "Ils au présent" sans "ent". Pour nous et vous : on prend la base de "Nous au présent" sans "ons".',
    principle: 'Exprime une obligation ("il faut que..."), un doute ou un souhait.'
  },
  passe_simple: {
    key: 'passe_simple',
    label: 'Passé Simple',
    category: 'simple',
    mathFormula: 'Radical + Terminaisons du Passé Simple',
    formulaDescription: '1er groupe : -ai, -as, -a, -âmes, -âtes, -èrent. 2e & 3e groupes : soit en -i (-is, -is, -it, -îmes, -îtes, -irent), soit en -u (-us, -us, -ut, -ûmes, -ûtes, -urent).',
    principle: 'Action brève et soudaine dans le passé (utilisé dans les livres et contes).'
  },
  imperatif_present: {
    key: 'imperatif_present',
    label: 'Impératif Présent',
    category: 'imperatif',
    mathFormula: 'Forme du présent sans pronom (tu, nous, vous)',
    formulaDescription: 'Seulement 3 personnes : tu, nous, vous, sans écrire le pronom. Au 1er groupe avec "tu", on ne met pas de "s" (ex: "Chante !" et non "Chantes").',
    principle: 'Donner un ordre, un conseil ou une consigne.'
  }
};
