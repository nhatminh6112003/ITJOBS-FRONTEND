export const ResumeStatusEnum = {
   UNDECIDED: 0,       // Chưa quyết định
   NOT_MATCHED: 1,     // Không phù hợp
   REJECTED: 2,        // Từ chối
   UNDER_REVIEW: 3,    // Kiểm tra
   INTERVIEW: 4,       // Phỏng vấn
   OFFERED: 5,         // Đề nghị tuyển dụng
   HIRED: 6,           // Nhận việc
 };
 export const ResumeStatusOptions = [
  { label: "Chưa quyết định", value: ResumeStatusEnum.UNDECIDED },
  { label: "Không phù hợp", value: ResumeStatusEnum.NOT_MATCHED },
  { label: "Từ chối", value: ResumeStatusEnum.REJECTED },
  { label: "Kiểm tra", value: ResumeStatusEnum.UNDER_REVIEW },
  { label: "Phỏng vấn", value: ResumeStatusEnum.INTERVIEW },
  { label: "Đề nghị tuyển dụng", value: ResumeStatusEnum.OFFERED },
  { label: "Nhận việc", value: ResumeStatusEnum.HIRED },
];

 