import BookmarksButton from "@app/_components/BookmarksButton";
import JobItemContent from "@app/_components/JobItemContent";
import JobListSearch from "@app/_components/JobListSearch";
import PaginationControls from "@app/_components/PaginationControls";
import ResultsCount from "@app/_components/ResultsCount";
import SortingControls from "@app/_components/SortingControls";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function Page() {

  return (
    <React.Fragment>
      <div className="background" />
      <div className="space" />
      <div className="container ">
        <div className="sidebar">
          <div className="sidebar__top">
            <ResultsCount />
            <SortingControls />
          </div>
          <JobListSearch />
          <PaginationControls />
        </div>
        <JobItemContent />
      </div>
      <div className="space" />
      <Toaster position="top-right" />
    </React.Fragment>
  )
}

