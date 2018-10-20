import getHotList from '../constrollers/news_hot_controller';
import news_video_controller from '../constrollers/news_video_controller';
import home_controller from '../constrollers/home_controller';
import entertainment_controller from '../constrollers/news_entertainment_controller';
import training_controller from '../constrollers/news_training_controller';


const routes = {
    '#/hot':getHotList,
    "#/video":news_video_controller,
    "#/recomment":home_controller,
    "#/entertainment":entertainment_controller,
    "#/training": training_controller
}

export { routes }
