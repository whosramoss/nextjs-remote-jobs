"use client"



import { useJobItem } from "@hooks/useJobItem";
import BookmarkIcon from "./BookmarkIcon";
import Spinner from "./Spinner";
import { useActiveIdContext } from "@providers/ActiveIdContextProvider";
import BookmarksButton from "@app/_components/BookmarksButton";

export default function JobItemContent() {
  const { activeId } = useActiveIdContext();
  const { jobItem, isLoading } = useJobItem(activeId);

  if (isLoading) {
    return <LoadingJobContent />;
  }

  if (!jobItem) {
    return <EmptyJobContent />;
  }

  return (
    <section className="job-details">
      <div>
        <img src={jobItem.coverImgURL} alt="#" />

        <div className="apply-btn" >
          <BookmarksButton />
        </div>

        <section className="job-info">
          <div className="job-info__left">
            <div className="job-info__badge">{jobItem.badgeLetters}</div>
            <div className="job-info__below-badge">
              <time className="job-info__time">{jobItem.daysAgo}d</time>

              <BookmarkIcon id={jobItem.id} />
            </div>
          </div>

          <div className="job-info__right">
            <h2 className="second-heading">{jobItem.title}</h2>
            <p className="job-info__company">{jobItem.company}</p>
            <p className="job-info__description">{jobItem.description}</p>
            <div className="job-info__extras">
              <p className="job-info__extra">
                {jobItem.duration}
              </p>
              <p className="job-info__extra">
                {jobItem.salary}
              </p>
              <p className="job-info__extra">
                {jobItem.location}
              </p>
            </div>
          </div>
        </section>

        <div className="job-details__other">
          <section className="qualifications">
            <div className="qualifications__left">
              <h4 className="fourth-heading">Qualifications</h4>
              <p className="qualifications__sub-text">
                Other qualifications may apply
              </p>
            </div>
            <ul className="qualifications__list">
              {jobItem.qualifications.map((qualification) => (
                <li key={qualification} className="qualifications__item">
                  {qualification}
                </li>
              ))}
            </ul>
          </section>

          <section className="reviews">
            <div className="reviews__left">
              <h4 className="fourth-heading">Company reviews</h4>
              <p className="reviews__sub-text">
                Recent things people are saying
              </p>
            </div>
            <ul className="reviews__list">
              {jobItem.reviews.map((review) => (
                <li key={review} className="reviews__item">
                  {review}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

function LoadingJobContent() {
  return (
    <section className="job-details">
      <div>
        <Spinner />
      </div>
    </section>
  );
}

function EmptyJobContent() {
  return (
    <section className="job-details">
      <div>
        <div className="job-details__start-view">
          <p>What are you looking for?</p>
          <p>
            Start by searching for any technology your ideal job is working with
          </p>
        </div>
      </div>
    </section>
  );
}
