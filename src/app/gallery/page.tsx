import { Flex, Meta, Schema } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/photosView";
import { baseURL, photos, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: photos.title,
    description: photos.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(photos.title)}`,
    path: photos.path,
  });
}

export default function photos() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={photos.title}
        description={photos.description}
        path={photos.path}
        image={`/api/og/generate?title=${encodeURIComponent(photos.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${photos.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView />
    </Flex>
  );
}
