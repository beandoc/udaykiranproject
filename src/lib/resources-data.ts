
import { Youtube, Podcast, Video } from 'lucide-react';

export type Resource = {
  type: 'video' | 'podcast' | 'document';
  titleKey: string;
  descriptionKey: string;
  src: string | { [key: string]: string | undefined };
  icon: React.ElementType;
  isYoutube?: boolean;
};

// To add a new resource:
// 1. Upload your video to the `public/videos` folder or your podcast to the `public/podcasts` folder.
// 2. Add a new object to the `resources` array below.
// 3. For local videos, set `type: 'video'` and `isYoutube: false`.
// 4. For podcasts, set `type: 'podcast'`.
// 5. Update `titleKey` and `descriptionKey` to match the text you want to display (add new entries to the .json language files if needed).
// 6. Set the `src` to the path of your file (e.g., '/videos/your-video.mp4'). For language-specific podcasts, use an object: src: { en: '/path/en.mp3', hi: '/path/hi.mp3' }

export const resources: Resource[] = [
  {
    type: 'podcast',
    titleKey: 'podcastPatientEp1Title',
    descriptionKey: 'podcastPatientEp1Desc',
    src: {
      en: '/podcasts/patient-episode-1.wav',
      mr: '/podcasts/patient-episode-1-mr.wav',
    },
    icon: Podcast,
  },
  {
    type: 'podcast',
    titleKey: 'podcastPatientEp2Title',
    descriptionKey: 'podcastPatientEp2Desc',
    src: '/podcasts/example-podcast.mp3', // Placeholder until the real file is uploaded
    icon: Podcast,
  },
  {
    type: 'podcast',
    titleKey: 'podcastPatientEp3Title',
    descriptionKey: 'podcastPatientEp3Desc',
    src: '/podcasts/example-podcast.mp3', // Placeholder until the real file is uploaded
    icon: Podcast,
  },
  {
    type: 'podcast',
    titleKey: 'podcastDonorEp1Title',
    descriptionKey: 'podcastDonorEp1Desc',
    src: '/podcasts/example-podcast.mp3', // Placeholder: Upload donor-episode-1.mp3
    icon: Podcast,
  },
  {
    type: 'podcast',
    titleKey: 'podcastDonorEp2Title',
    descriptionKey: 'podcastDonorEp2Desc',
    src: '/podcasts/example-podcast.mp3', // Placeholder: Upload donor-episode-2.mp3
    icon: Podcast,
  },
  {
    type: 'podcast',
    titleKey: 'podcastCaregiverEp1Title',
    descriptionKey: 'podcastCaregiverEp1Desc',
    src: '/podcasts/example-podcast.mp3', // Placeholder: Upload caregiver-episode-1.mp3
    icon: Podcast,
  },
  {
    type: 'podcast',
    titleKey: 'podcastCaregiverEp2Title',
    descriptionKey: 'podcastCaregiverEp2Desc',
    src: '/podcasts/example-podcast.mp3', // Placeholder: Upload caregiver-episode-2.mp3
    icon: Podcast,
  },
  {
    type: 'video',
    titleKey: 'resourcesVideoTitle', // Youtube Video
    descriptionKey: 'resourcesVideoDesc',
    src: 'https://www.youtube.com/embed/fELn4Fe9Ccc',
    icon: Youtube,
    isYoutube: true,
  },
  {
    type: 'video',
    titleKey: 'localVideoExampleTitle',
    descriptionKey: 'localVideoExampleDesc',
    src: '/videos/example-video.mp4', // Example path for a local video
    icon: Video, // Using the 'Video' icon for local files
    isYoutube: false,
  },
];
