import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider/Index';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QrcodeGnerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabsTest from './components/custom-tabs/tabs-test';
import Modaltest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-founder';
import SearchAutocomplete from './components/search-autocomplete-with-api';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/*star rating*/}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10}/> */}

      {/* load more data */}
      {/* <LoadMoreData/> */}

      {/* Tree view / Menu UI / Recursive Navigation Menu */}
      {/* <TreeView menus={menus}/> */}

      {/* Qr Code Generator */}
      {/* <QrcodeGnerator/> */}

      {/* Light Dark Mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* Custom Tabs Content */}
      {/* <TabsTest /> */}

      {/* Custom modal popup */}
      {/* <Modaltest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder/> */}

      {/* Search autocomplete with api */}
      <SearchAutocomplete/>

    </div>
  );
}

export default App;
