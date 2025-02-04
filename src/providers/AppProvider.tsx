import ActiveIdContextProvider from "@providers/ActiveIdContextProvider";
import BookmarksContextProvider from "@providers/BookmarksContextProvider";
import JobItemsContextProvider from "@providers/JobItemsContextProvider";
import { CustomQueryProvider } from "@providers/QueryProvider";
import SearchTextContextProvider from "@providers/SearchTextContextProvider";
import { ICommons } from "@utils/utils";

export default async function AppProvider({ children }: ICommons) {
  return (
    <CustomQueryProvider>
      <BookmarksContextProvider>
        <ActiveIdContextProvider>
          <SearchTextContextProvider>
            <JobItemsContextProvider>
              {children}
            </JobItemsContextProvider>
          </SearchTextContextProvider>
        </ActiveIdContextProvider>
      </BookmarksContextProvider>
    </CustomQueryProvider>
  );
}
