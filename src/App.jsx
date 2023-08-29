import HeaderComp from './components/header-component/header-top/header.component'
import Body from './components/about-component/about-body/about-body.component';
import FirstFeature from './components/features-component/first-feature/first-feature.component';
import SecondFeature from './components/features-component/second-feature/second-feature.component';
import ThirdFeature from './components/features-component/third-feature/third-feature.component';
import FourthFeature from './components/features-component/fourth-feature/fourth-feature.component';
import Feature from './components/features-component/feature-section/features-section.component';
import ToursCore from './components/tours-component/tours-core/tours-core.component';
import SectionHeader from './components/stories-component/section-header/section-header.component';
import SectionCore from './components/stories-component/section-core/section-core.component';
import BaseStoryComp from './components/stories-component/story-base/base-story.component';
import StoriesButton from './components/stories-component/stories-button/stories-button.component';
import MainBoard from './components/booking-component/main/main-board.component';
import FooterMain from './components/footer-component/footer-main/footer-main.component';

import imgNat8 from './assets/img/nat-8.jpg'
import imgNat9 from './assets/img/nat-9.jpg'

import './App.css'

function App() {

  return (
   <div className="App">
<HeaderComp />
      <Body />
      <Feature 
        childComponent1={<FirstFeature />}
        childComponent2={<SecondFeature />}
        childComponent3={<ThirdFeature />}
        childComponent4={<FourthFeature />}
      />
      <ToursCore />
      <SectionHeader />
      <SectionCore
        childComponent1={
          <BaseStoryComp 
            path={imgNat8}
            name={"Marry Smith"}
            title={"I had the best week with my family"}
            text={"I did not think our Forrest Hiker program to be amazing.\
                  Looking forward to do it again next season. Creating \
                  lifelong memories, my family and I had an incredible week \
                  filled with love, laughter, and unforgettable adventures."}
          />}
        childComponent2={
          <BaseStoryComp 
            path={imgNat9}
            name={"Jack Willson"}
            title={"My experiences with Natours changed my life"}
            text={"Embarking on a transformative journey with Natours, my life \
                  took a remarkable turn as I discovered new passions, forged meaningful \
                  connections, and experienced personal growth like never before."}
          />}
      />
        <StoriesButton />
        <MainBoard />
        <FooterMain />
   </div>   
  )
}

export default App
