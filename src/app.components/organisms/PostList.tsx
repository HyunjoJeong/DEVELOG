import PostBox from "@components/molecules/PostBox";
import styled from "styled-components";

type TProps = {};

export default function PostList({}: TProps) {
  return (
    <PostListWrapper>
      <PostBox
        postId={1}
        imageSrc={null}
        title="제목인데 좀 긴 편입니다 아주 많이 길어야 할 겁니다"
        description="설명~~인데 좀 많이 긴 편입니다 아주 많이 길어야 할 겁니다 그래야 제가 이거를 확인할 수 있을 거거든요 그렇죠>? 조금만 더 힘을 내 봅시다아아아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ"
        commentCount={3}
        recommendCount={5}
        viewCount={109}
        author={{ id: 10, name: "정현조에오", profileImage: null }}
        createdAt="24.04.05"
      />
      <PostBox
        postId={1}
        imageSrc={null}
        title="제목"
        description="설명~~"
        commentCount={3}
        recommendCount={5}
        viewCount={109}
        author={{ id: 10, name: "정현조에오", profileImage: null }}
        createdAt="24.04.05"
      />
      <PostBox
        postId={1}
        imageSrc={null}
        title="제목"
        description="설명~~"
        commentCount={3}
        recommendCount={5}
        viewCount={109}
        author={{ id: 10, name: "정현조에오", profileImage: null }}
        createdAt="24.04.05"
      />
      <PostBox
        postId={1}
        imageSrc={null}
        title="제목"
        description="설명~~"
        commentCount={3}
        recommendCount={5}
        viewCount={109}
        author={{ id: 10, name: "정현조에오", profileImage: null }}
        createdAt="24.04.05"
      />
    </PostListWrapper>
  );
}

const PostListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;

  margin: 10px 0;
`;
