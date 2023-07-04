import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          VeggieVision : Reconnaitre les fruits et légumes ainsi que leur prix
        </h1>
      </Column>

      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>À Propos</Tab>
            <Tab>Architecture</Tab>
            <Tab>Develop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content">
                  <h2 className="landing-page__subheading">
                    À quoi sert VeggieVision ?{' '}
                  </h2>
                  <p className="landing-page__p">
                    VeggieVision est une application qui permet à un utilisateur
                    de soumettre une image d'un fruit ou d'un légume et
                    d'obtenir des informations sur la variété du fruit ou du
                    légume en question ainsi que son prix. Le but de
                    l'application est d'aider un CMO d'une entreprise vendant
                    des fruits et légumes à collecter facilement des données sur
                    leurs concurrents afin d'ajuster au mieux leurs propres
                    prix.
                  </p>
                  <Button>Tester l'application</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img
                    className="landing-page__illo"
                    src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                    alt="Carbon illustration"
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content">
                  VeggieVision utilise trois modèles différents de Deep
                  Learning. Deux modèles de détection d'objets, un qui permet de
                  reconnaitre la variété du fruit et un autre pour reconnaitre
                  l'étiquette de prix, ces modèles ont été entrainé sur des
                  images annoté mannuelement. Le troisième modèle à base de
                  Transformers effectue un processus d'OCR pour scanner
                  l'étiquette et soutirer le prix du produit. Ces modèles
                  intéragissent entre eux dans une application qui est déployé
                  sur IBM Cloud.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content">
                  Carbon provides styles and components in Vanilla, React,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>

      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className="landing-page__label">The Principles</h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Open
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Modular
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Consistent
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;
