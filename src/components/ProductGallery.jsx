import { Gallery } from "./Gallery";

const images = [
  {
    src: "/trafo.png",
    alt: "Ferrasage planar transformer in its black housing with green terminal covers",
    caption: "Planar transformer, production housing",
    width: 1254,
    height: 1254,
  },
  {
    src: "/coil-1.png",
    alt: "Planar transformer coil",
    caption: "Planar coil, view 1",
    width: 1024,
    height: 765,
  },
  {
    src: "/coil-2.png",
    alt: "Planar transformer coil, second view",
    caption: "Planar coil, view 2",
    width: 1024,
    height: 765,
  },
  {
    src: "/planar-transformer-heatmap.png",
    alt: "Thermal heatmap of the planar transformer windings and core",
    caption: "Thermal simulation: winding and core heat distribution",
    width: 1536,
    height: 1024,
  },
  {
    src: "/planar-transformer-heatmap-up.jpg",
    alt: "Top-down thermal heatmap of the planar transformer",
    caption: "Thermal simulation: top view",
    width: 872,
    height: 851,
  },
];

export function ProductGallery() {
  return <Gallery id="product-gallery" images={images} />;
}
