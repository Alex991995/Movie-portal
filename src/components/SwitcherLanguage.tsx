import { useTranslation } from 'react-i18next';
import { SelectValue, Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';

function SwitcherLanguage() {
  const { i18n } = useTranslation();
  const arrLang = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' },
  ];

  function changeLanguage(code: string) {
    i18n.changeLanguage(code);
  }
  return (
    <Select onValueChange={changeLanguage}>
      <SelectTrigger className="max-w-[100px]">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        {arrLang.map(item => (
          <SelectItem key={item.code} value={item.code}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SwitcherLanguage;
