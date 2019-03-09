/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div>
    <img className="customLogo" src={props.img_src} alt={props.img_alt} />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    <Logo img_src={imgUrl('emuto.svg')} img_alt={siteConfig.title} />
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('try_emuto', language)}>
              Try it out
            </Button>
            <Button href={docUrl('tutorial', language)}>
              Get started
            </Button>
            <Button href={siteConfig.repoUrl}>GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="twoColumn">
    {[
      {
        title: 'Transform JSON data',
        content: 'Restructure, transform, and manipulate JSON files effortlessly',
      },
      {
        title: 'Inspired by jq and GraphQL',
        content: "[Compare emuto to jq and GraphQL](/emuto/docs/comparison_with_other_languages)",
      },
      {
        title: 'Interface between applications',
        content: "Emuto can be used as an interface between applications that take different data structures",
      },
      {
        title: 'Consume APIs in the command line',
        content: ` \`curl "https://swapi.co/api/people/1/" | emuto '$.name'\``
      },
      {
        content: `Compile emuto queries to JS using Webpack

Setup:
\`yarn add --dev emuto emuto-loader\``,
        title: `Compile to JavaScript`,
      },
      {
        content: `Combine emuto with well-known utilities such as \`curl\`, \`awk\`

Setup:
\`yarn global add emuto emuto-cli\``,
        title: `Command line tool`,
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Flexible</h2>
    <MarkdownBlock>
      Convert, transform, filter, slice JSON files in node or in the browser
    </MarkdownBlock>
  </div>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <img src={imgUrl('demo.gif')} alt="" style={{margin: "auto", display: "block"}} />
          <Features />
          <FeatureCallout />
        </div>
        <style dangerouslySetInnerHTML={{__html:`
            .blockContent a {
                text-decoration: underline;
            }`}} />
      </div>
    );
  }
}

module.exports = Index;
