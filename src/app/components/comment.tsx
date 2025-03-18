import React from "react";
import Image from "next/image";

export interface Comment {
  profileIcon: string;
  name: string;
  comment: string;
  reply?: Comment[];
}

export const Comment = ({ comment }: { comment: Comment }) => {
  return (
    <div className="flex justify-start gap-3">
      <Image
        src={`/profile-icons/${comment.profileIcon}`}
        alt={`Profile Icon ${comment.profileIcon}`}
        width={40}
        height={40}
      />
      <div className="mt-1">
        <span>
          <b>{comment.name}</b>
        </span>
        <span>{comment.comment}</span>
      </div>
    </div>
  );
};
