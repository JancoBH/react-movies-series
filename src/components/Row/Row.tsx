import './row.scss';
import useViewport from '../../hooks/useViewport';
import { useRef } from 'react';

// Swiper
import SwiperCore, { Pagination, Navigation, A11y, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RowPoster } from '../RowPoster/RowPoster';
SwiperCore.use([Navigation, Pagination, A11y, Lazy]);

export const Row = () => {
  const { width } = useViewport();

  const movieList = [
    { id: 1, title: 'Stranger Things', poster: 'https://image.tmdb.org/t/p/original//56v2KjBlU4XaOv9rVYEQypROD7P.jpg' },
    { id: 2, title: 'Aquaman', poster: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg' },
    { id: 3, title: 'Batman', poster: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/xHrp2pq73oi9D64xigPjWW1wcz1.jpg' },
    { id: 4, title: 'Black Panther', poster: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg' },
    { id: 5, title: 'Captain Marvel', poster: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg' },
    { id: 6, title: 'Deadpool', poster: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/en971MEXui9diirXlogOrPKmsEn.jpg' },
    { id: 7, title: 'Doctor Strange', poster: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/eQN31P4IEhyp6NkdccvppJnyuJ4.jpg' },
    { id: 8, title: 'Fantastic Beasts', poster: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg' },
  ];

  // Custom Swiper config
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const customSwiperParams = {
    modules: [Pagination, Navigation, A11y, Lazy],
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    breakpoints: {
      1378: { slidesPerView: 6, slidesPerGroup: 6 },
      998: { slidesPerView: 4, slidesPerGroup: 4 },
      625: { slidesPerView: 3, slidesPerGroup: 3 },
      330: { slidesPerView: 2, slidesPerGroup: 2 },
      0: { slidesPerView: 1.5, slidesPerGroup: 1.5 },
    },
    loopAdditionalSlides: width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2,
    pagination: { type: 'progressbar' },
    loop: false,
    grabCursor: true,
    draggable: false,
    preventClicksPropagation: true,
    preventClicks: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
  };

  const rightMouseOver = (e: any) => {
    if (e.currentTarget.classList.contains('right')) {
      e.currentTarget.parentElement.classList.add('is-right');
    } else if (e.currentTarget.classList.contains('left')) {
      e.currentTarget.parentElement.classList.add('is-left');
    }
  };

  const rightMouseOut = (e: any) => {
    e.currentTarget.parentElement.classList.remove('is-right', 'is-left');
  };

  const insertPositionClassName = (index: number) => {
    const i = index + 1;

    if (i === 1) return 'left';
    else if (i === 20) return 'right';

    if (width >= 1378) {
      if ([7, 13, 19].includes(i)) return 'left';
      else if ([6, 12, 18].includes(i)) return 'right';
    } else if (width >= 998) {
      if ([5, 9, 13, 17].includes(i)) return 'left';
      else if ([4, 8, 12, 16].includes(i)) return 'right';
    } else if (width >= 768) {
      if ([4, 7, 10, 13, 16].includes(i)) return 'left';
      else if ([3, 6, 9, 12, 15, 18].includes(i)) return 'right';
    }
  };

  return (
    <div className="Row">
      <div className="Row__poster--wrp">
        <div className="Row__slider--mask left" ref={navigationPrevRef}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="Row__slider--mask-icon left fill-white">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
        </div>
        <div className="Row__slider--mask right" ref={navigationNextRef}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="Row__slider--mask-icon right fill-white">
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </div>
        {
          // @ts-ignore
          <Swiper
            {...customSwiperParams}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            {movieList.map((movie, i) => (
              <SwiperSlide key={movie.id} onMouseOver={rightMouseOver} onMouseOut={rightMouseOut} className={insertPositionClassName(i)}>
                <RowPoster item={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </div>
  );
};
