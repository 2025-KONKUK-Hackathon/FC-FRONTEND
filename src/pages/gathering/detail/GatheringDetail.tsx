import Category from "@/shared/components/category/Category";

export default function GatheringDetail() {
  return <div style={{ display: "flex", gap: "1rem" ,width:"100%", flexDirection:"column"}}>
        <Category text="모임간" icon="🕒" color="KU_Darkgreen" size="small" />
    <Category text="모임 신청기간" icon="🕒" color="KU_Darkgreen" size="medium" />
    <Category text="모임 활동기간" icon="🕒" color="KU_Darkgreen" size="large" />
  </div>;
}
