export interface ISliderItems {
    sliderCategory: SliderCategory[];
    itemsPerPage: ItemsPerPage;
}

export type SliderCategory = {
    image: Image;
    label: string;
}

type ItemsPerPage = {
    desktop: number | string;
    tablet: number | string;
    phone: number | string;
}

type Image = {
    src: string;
    maxWidth: string;
}
