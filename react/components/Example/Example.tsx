import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { ISliderItems, SliderCategory } from '../../typings/example';
import { SliderLayout } from 'vtex.slider-layout';
import { Image } from 'vtex.store-image';

/**
 * declare todos los modificadores de clases que necesite su proyecto recuerde
 * que esto permitira que su proyectos sea configurable
 */
const CSS_HANDLES = [
    'sliderItem',
    'label_category'
] as const;
/**
 * declaracion del componente
 */
const Example: StorefrontFunctionComponent<ISliderItems> = ({ sliderCategory, itemsPerPage }) => {
    const handles = useCssHandles(CSS_HANDLES);
    return (
        <React.Fragment>
            <div className={`ml1 mt3 t-body`}>
                <SliderLayout itemsPerPage={itemsPerPage}>
                    {sliderCategory && sliderCategory?.map((_item: SliderCategory, index: number) => (
                        <div className={`${handles.sliderItem}`} key={index}>
                            <Image src={_item.image?.src} maxWidth={_item.image?.maxWidth} />
                            <div className={`${handles.label_category} tc pv3`} >{_item.label}</div>
                        </div>
                    ))}
                </SliderLayout>
            </div>
        </React.Fragment >
    );
};

/**
 * propiedades por defecto del componete
 */
Example.defaultProps = {
    itemsPerPage: {
        desktop: 6,
        tablet: 3,
        phone: 3,
    },
    sliderCategory: [
        {
            image: {
                src: "https://alessaecuador.vtexassets.com/arquivos/electro.png?v=2",
                maxWidth: "200px"
            },
            label: 'Category 1',
        },
        {
            image: {
                src: "https://alessaecuador.vtexassets.com/arquivos/electro.png?v=2",
                maxWidth: "200px"
            },
            label: 'Category 2',
        },
        {
            image: {
                src: "https://alessaecuador.vtexassets.com/arquivos/electro.png?v=2",
                maxWidth: "200px"
            },
            label: 'Category 3',
        },
        {
            image: {
                src: "https://alessaecuador.vtexassets.com/arquivos/electro.png?v=2",
                maxWidth: "200px"
            },
            label: 'Category 4',
        },
        {
            image: {
                src: "https://alessaecuador.vtexassets.com/arquivos/electro.png?v=2",
                maxWidth: "200px"
            },
            label: 'Category 5',
        },
        {
            image: {
                src: "https://alessaecuador.vtexassets.com/arquivos/electro.png?v=2",
                maxWidth: "200px"
            },
            label: 'Category 6',
        },
        {
            image: {
                src: "https://alessaecuador.vtexassets.com/arquivos/electro.png?v=2",
                maxWidth: "200px"
            },
            label: 'Category 7',
        },
        {
            image: {
                src: "https://alessaecuador.vtexassets.com/arquivos/electro.png?v=2",
                maxWidth: "200px"
            },
            label: 'Category 8',
        },
    ]
};

/**
 * esquema base del componenete esto habilita el site editor desde el admin
 */

Example.schema = {
    title: 'admin/editor.seller-name.title',
    description: 'admin/editor.seller-name.description',
    properties: {
        label: {
            title: 'admin/editor.seller-name.label.title',
            type: 'string',
        },
    },
};

export default Example;
