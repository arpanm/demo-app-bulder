import React from 'react';

interface Story {
  title: string;
  image: string;
}

interface AmpWebStoryProps {
  title: string;
  publisher: string;
  publisherLogo: string;
  poster: string;
  stories: Story[];
}

const AmpWebStory: React.FC<AmpWebStoryProps> = ({
  title,
  publisher,
  publisherLogo,
  poster,
  stories,
}) => {
  return (
    <amp-story
      standalone="standalone"
      title={title}
      publisher={publisher}
      publisher-logo-src={publisherLogo}
      poster="portrait 1:1"
    >
      {/* Cover Page */}
      <amp-story-page id="cover">
        <amp-story-grid-layer template="vertical">
          <amp-img src={poster} width={720} height={1280} layout="fill" alt={title} />
          <div className="story-title">
            <h1>{title}</h1>
          </div>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* Story Pages */}
      {stories.map((story, index) => (
        <amp-story-page key={index} id={`page-${index + 1}`}>
          <amp-story-grid-layer template="vertical">
            <amp-img src={story.image} width={720} height={1280} layout="fill" alt={story.title} />
            <div className="story-content">
              <h2>{story.title}</h2>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>
      ))}
    </amp-story>
  );
};

export default AmpWebStory;
