import { setTranslations } from 'redux-i18n';

const syncContent = (store) => {
  // @TODO: do something to retrieve content

  // example how to update content
  const translation = {
    en: {
      header: 'React Redux boilerplate',
      check_it_out: 'Check it out at',
      github: 'Github',
      multi_lang_example: 'Multi languages example:',
      check_out_example: 'Checkout other examples:',
      toggle_language: 'Change Language',
      calculation: 'Calculation',
      auth: 'Authentication',
      english: 'English',
      vietnamese: 'Tieng Viet'
    },
    vi: {
      header: 'React Redux boilerplate',
      check_it_out: 'Xem them chi tiet tai',
      github: 'Github',
      multi_lang_example: 'Vi du ve da ngon ngu:',
      check_out_example: 'Xem them cac vi du khac ben duoi:',
      toggle_language: 'Thay doi ngon ngu',
      calculation: 'Tinh toan',
      auth: 'Chung thuc',
      english: 'English',
      vietnamese: 'Tieng Viet'
    }
  };

  setTimeout(() =>
    store.dispatch(setTranslations(translation)), 1000);
};

export default syncContent;
