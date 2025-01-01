import HomeSlider from "../../Components/Home/CategoriesSlider";
import { useTranslation } from 'react-i18next';

const Categories = () => {
    const {t} = useTranslation();
  return (
    <div className='category_page'>
        <h1>{t("What do you like")}?</h1>

        <HomeSlider />
    </div>
  )
}

export default Categories