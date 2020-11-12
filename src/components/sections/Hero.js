import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import FrameComponent from '../elements/FrameComponent'
import MyResponsiveLine from '../elements/MyResponsiveLine'
import { ResponsiveLine, ResponsiveLineCanvas } from '@nivo/line'

const ch12 = require('../../assets/json/ch12.json');


const propTypes = {
  ...SectionProps.types
}
const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  // const RootFile = "../../assets/rootFiles/Running12Hours_Rm402SA_HeHome_202.root"
  // const itemArr =  'c1'
  // //  
  // const frameSrc = '"https://root.cern/js/latest/?nobrowser&localfile=' + RootFile +'&item=hxvhy&layout"'
  // const altFrameSrc = '"https://root.cern/js/latest/?nobrowser&file=../files/hsimple.root'  + '&item&interactive=1"'
  // const ifoorame = '<iframe src=' + altFrameSrc + ' width="700" height="400"></iframe>';

  // Need TCanvas
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Muon Detector Data <br /> <span className="text-color-primary"> Georgia State University</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                {/* <br></br>                <br></br>

                Select the time interval you would like to display below from Oulu.
                 */}</p>

              {/* Could be   */}
              {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div> */}

              <div className="reveal-from-bottom" data-reveal-delay="600">
                Channel 1 and 2 Coinstance:
                
                Hourly Moving Average
                <div className="heightFixed">
                  <ResponsiveLineCanvas
                    data={ch12}
                    margin={{ top: 0, right: 65, bottom: 50, left: 100 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', stacked: true, min: 11000, max: 13000 }}
                    yFormat=" >-.2f"
                    // axisTop={null}
                    axisRight={{
                      tickValues: [
                        11000,
                        11400,
                        11800,
                        12200,
                        12600
                    ],
                      tickSize: 5,
                      tickPadding: 10,
                      tickRotation: 0,
                      format: '.2f',
                      legend: '',
                      legendOffset: 5
                    }}
                    axisBottom={{
                      tickValues: ['8-30-20', '9-5-3', '9-10-10', '9-15-17', '9-20-23'],
                      tickSize: 5,
                      tickPadding: 10,
                      tickRotation: 0,
                      legend: 'Date',
                      legendOffset: 36,
                      legendPosition: 'middle'
                    }}
                    axisLeft={{
                      tickValues: [
                        11000,
                        11400,
                        11800,
                        12200,
                        12600
                    ],
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      format: '.2f',
                      legend: 'Hourly Count',
                      legendOffset: -80,
                      legendPosition: 'middle'
                    }}
                    enableGridX={false}
                    colors={{ scheme: 'spectral' }}
                    // lineWidth={1}
                    // pointSize={4}
                    pointColor={{ theme: 'background' }}
                    // pointBorderWidth={1}
                    // pointBorderColor={{ from: 'serieColor' }}
                    // pointLabelYOffset={-12}
                    // useMesh={true}
                    enablePointLabel={true}
                    gridXValues={[0, 127, 254, 381, 508]}
                    gridYValues={[
                      11000,
                      11400,
                      11800,
                      12200,
                      12600
                  ]}
                    legends={[
                      {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: false,
                        translateX: 140,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 12,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'square',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                            }
                          }
                        ]
                      }
                    ]}
                  />

                </div>



                {/* <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button>
                </ButtonGroup> */}
              </div>






            </div>
          </div>

          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}


        </div>
      </div>
    </section>
  );
}


Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;