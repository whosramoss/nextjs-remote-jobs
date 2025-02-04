"use client"

import { useBookmarksContext } from "@providers/BookmarksContextProvider";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

interface IBookmarkIcon {
  id: number;
};

export default function BookmarkIcon({ id }: IBookmarkIcon) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`
        ${bookmarkedIds.includes(id) ? "filled" : ""}
      `}
      />
    </button>
  );
}
