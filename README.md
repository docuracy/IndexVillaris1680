[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.4748653.svg)](https://doi.org/10.5281/zenodo.4748653)
# Index Villaris, 1680
Index villaris, or, An alphabetical table of all cities, market-towns, parishes, villages, private seats in England and Wales. First published by [John Adams](https://en.wikipedia.org/wiki/John_Adams_%28cartographer%29) in 1680; this digital GIS edition transcribed, edited, extended, and curated by Stephen Gadd and Alexis Litvine.

The dataset keeps two things apart. The **transcript** is what the book prints: each of its 24,000 titles, Adams's county and hundred as spelled, his own latitude and longitude, and his symbols. The **editorial layer** is our best identification of the place each entry means: its county (with a Chapman code), the hundred meant (linked to Wikidata and the Vision of Britain unit where one exists), a point, and links to [CAMPOP Places](https://w3id.org/campop/place/), [Wikidata](https://www.wikidata.org/) and [GB1900](https://en.wikipedia.org/wiki/GB1900) place-names. Every city and market town is typed as such (with the Wikidata classes *city* and *market town*, like every other type in the dataset) and linked to its CAMPOP Places identifier.

Each point is the position of an [OpenStreetMap](https://www.openstreetmap.org/) node chosen by hand for the place, or (from v2.1.0, where the place was corrected) the coordinates of its Wikidata item; GB1900's positions were not used. The OSM-derived points are © OpenStreetMap contributors, used as Geocoding Results under the [OSMF Geocoding Guideline](https://osmfoundation.org/wiki/Licence/Community_Guidelines/Geocoding_-_Guideline).

`docs/data/index_villaris.csv` holds the transcript and the editorial columns side by side; `docs/data/IV-GB1900-OSM-WD.lp.json` is the same in [Linked Places format](https://github.com/LinkedPasts/linked-places); `docs/data/corrections.csv` lists every editorial change since v2.0.4, with its basis. Licensed [CC BY 4.0](LICENSE).

More information [here](https://viaeregiae.org/wiki/Index_Villaris).

> [!TIP]
> Visualise the dataset on the accompanying [Interactive Map](https://docuracy.github.io/IndexVillaris1680/#/?/?/?/mode=points+facet=glyphs).

![image](https://github.com/docuracy/IndexVillaris1680/assets/42514781/ea27886a-945f-4594-8ea3-bd0e825f00ba)

> [!TIP]
> View reconstituted tables for individual counties here: [County Tables](https://docuracy.github.io/IndexVillaris1680/table/).

<figure>
  <img src="https://user-images.githubusercontent.com/42514781/117804978-564dd000-b250-11eb-8090-2c8a0bcc239b.jpg" alt="Raw coordinate data"/>
  <figcaption>Raw coordinate data.</figcaption>
</figure>
<hr/>
<figure>
  <img src="https://user-images.githubusercontent.com/42514781/117804983-58179380-b250-11eb-8384-999e0ec852ea.jpg" alt="Coordinates conformed by thin plate spline"/>
  <figcaption>Coordinates conformed by thin plate spline.</figcaption>
</figure>
<hr/>
<figure>
  <img src="https://user-images.githubusercontent.com/42514781/117804961-5221b280-b250-11eb-87cf-df58d32c3d30.jpg" alt="Distribution of gentry and aristocracy in England & Wales, 1680"/>
  <figcaption>Distribution of gentry and aristocracy in England & Wales, 1680.</figcaption>
</figure>
