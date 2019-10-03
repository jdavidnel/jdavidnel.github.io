import translate from 'google-translate-api';
import { Language } from '@/types/Enum';

export default class Translator {
    public languagefrom: Language;

    public languageto: Language;

    constructor(languagefrom: Language, languageto: Language) {
      this.languagefrom = languagefrom;
      this.languageto = languageto;
    }

    public translate(sentence: string) : Promise<string> {
      return Translator.translate(sentence, this.languagefrom, this.languageto);
    }

    public static translate(sentence: string, from: Language, to: Language): Promise<string> {
      return translate(sentence,
        {
          from: Translator.enumtostr(from),
          to: Translator.enumtostr(to),
        }).then(res => res.from.text.value).catch((err) => {
        throw new Error(err);
      });
    }

    public static enumtostr(language: Language): string {
      return (Language[language] as string);
    }
}
