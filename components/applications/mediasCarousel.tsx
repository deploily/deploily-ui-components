import { Carousel, Image } from 'antd';


export interface Media {
    id?: number;
    image?: string;
    title?: string;
}


export default function MediasCarousel({ medias }: { medias: Media[] }) {
    return (

        <Carousel
            autoplay
            dots
            style={{
                width: '100%',
             }}
        >
            {
                medias?.length != 0 ?
                    medias
                    && medias.map((media, i) => (
                        <div key={i} >
                            <Image loading="lazy" src={media.image} width={"100%"}
                                height={200} preview={false} />
                        </div>
                    )

                    ) : <Image src="/images/logo_service.png" width={"100%"} height={200} alt="logo_service" preview={false} />

            }

        </Carousel>
    )
}
