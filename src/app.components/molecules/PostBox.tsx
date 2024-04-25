import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type TProps = {
  postId: number;
  imageSrc: string | null;
  title: string;
  description: string;
  commentCount: number;
  recommendCount: number;
  viewCount: number;
  author: {
    id: number;
    name: string;
    profileImage: string | null;
  };
  createdAt: string;
};

export default function PostBox({
  postId,
  imageSrc,
  title,
  description,
  commentCount,
  recommendCount,
  viewCount,
  author,
  createdAt,
}: TProps) {
  return (
    <PostBoxWrapper>
      <Link href={`/${author.id}/${postId}`}>
        {imageSrc ? (
          <Image src={imageSrc} alt={title} width={320} height={180} />
        ) : (
          <div className="no-image" />
        )}
      </Link>
      <InfoWrapper>
        <div>
          <Link href={`/${author.id}/${postId}`}>
            <h4>{title}</h4>
            <p>{description}</p>
          </Link>
          <p className="count-wrapper">
            조회수 {viewCount} | 댓글 {commentCount} | 추천수 {recommendCount}
          </p>
        </div>
        <div>
          <Link href={`/${author.id}`}>
            by <span>{author.name}</span>
          </Link>
          <span>{createdAt}</span>
        </div>
      </InfoWrapper>
    </PostBoxWrapper>
  );
}

const PostBoxWrapper = styled.div`
  aspect-ratio: 16 / 20;

  border: 1px solid var(--neutral-30);
  border-radius: 12px;

  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.16);
    transition: transform, box-shadow 300ms ease-in-out;
  }

  img {
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 12px 12px 0 0;
  }

  .no-image {
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 12px 12px 0 0;
    background-color: var(--bg-neutral);
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 55%;

  border-top: 1px solid var(--neutral-20);
  border-radius: 0 0 12px 12px;
  background-color: #fefeff;

  position: relative;

  color: var(--neutral-80);

  div:first-of-type {
    position: relative;

    width: 100%;
    height: calc(100% - 41px);
    padding: 16px;

    a {
      color: var(--neutral-1000);

      h4 {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 10px;

        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      p {
        height: 75px;

        font-size: 15px;
        line-height: 25px;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .count-wrapper {
      position: absolute;
      bottom: 16px;

      font-size: 12px;
      line-height: 18px;
    }
  }

  div:last-of-type {
    width: 100%;
    padding: 8px 16px;

    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: space-between;

    border-top: 1px solid var(--neutral-30);

    color: var(--neutral-80);
    font-size: 12px;
    line-height: 24px;

    a {
      span {
        color: var(--neutral-1000);
      }
    }
  }
`;
