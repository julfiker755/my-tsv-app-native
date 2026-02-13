import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

interface AutoSliderCarouselProps<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => any;
  keyExtractor: (item: T, index: number) => string;
  itemWidth?: number;
  interval?: number;
}

export function AutoSliderCarousel<T>({
  data,
  renderItem,
  keyExtractor,
  itemWidth = 160,
  interval = 3000,
}: AutoSliderCarouselProps<T>) {
  const listRef = useRef<FlatList<T>>(null);
  const [index, setIndex] = useState(0);

  const infiniteData = useMemo(() => [...data, ...data], [data]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const scrollNext = () => {
      let nextIndex = index + 1;

      if (nextIndex >= infiniteData.length) {
        listRef.current?.scrollToOffset({ offset: 0, animated: false });
        nextIndex = 1;
      }

      listRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setIndex(nextIndex);
    };

    const timer = setInterval(scrollNext, interval);
    return () => clearInterval(timer);
  }, [index, infiniteData, interval, data]);

  return (
    <FlatList
      ref={listRef}
      data={infiniteData}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item, idx) => `${keyExtractor(item, idx)}-${idx}`}
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth}
      decelerationRate="fast"
      onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const newIndex = Math.round(e.nativeEvent.contentOffset.x / itemWidth);
        setIndex(newIndex);
      }}
      onScrollToIndexFailed={() => {}}
    />
  );
}
