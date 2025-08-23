import "@styles/global.css.ts";
import Category from "@shared/components/category/Category";
import { CLASS_CATEGORY } from "@shared/constant/class";
import { PART_CATEGORY } from "@shared/constant/part";
import { GRADE_CATEGORY } from "@shared/constant/grade";
import { SUBJECT_CATEGORY } from "@shared/constant/subject";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      <Category
        text={CLASS_CATEGORY.STUDY.text}
        icon={CLASS_CATEGORY.STUDY.icon}
        color={CLASS_CATEGORY.STUDY.color}
      />
      <Category
        text={CLASS_CATEGORY.PROJECT.text}
        icon={CLASS_CATEGORY.PROJECT.icon}
        color={CLASS_CATEGORY.PROJECT.color}
      />
      <Category
        text={CLASS_CATEGORY.EVENT.text}
        icon={CLASS_CATEGORY.EVENT.icon}
        color={CLASS_CATEGORY.EVENT.color}
      />
      <Category
        text={CLASS_CATEGORY.FRIENDSHIP.text}
        icon={CLASS_CATEGORY.FRIENDSHIP.icon}
        color={CLASS_CATEGORY.FRIENDSHIP.color}
      />
      <Category
        text={CLASS_CATEGORY.ETC.text}
        icon={CLASS_CATEGORY.ETC.icon}
        color={CLASS_CATEGORY.ETC.color}
      />
      <Category
        text={PART_CATEGORY.WEB.text}
        icon={PART_CATEGORY.WEB.icon}
        color={PART_CATEGORY.WEB.color}
      />
      <Category
        text={PART_CATEGORY.SERVER.text}
        icon={PART_CATEGORY.SERVER.icon}
        color={PART_CATEGORY.SERVER.color}
      />
      <Category
        text={PART_CATEGORY.ETC.text}
        icon={PART_CATEGORY.ETC.icon}
        color={PART_CATEGORY.ETC.color}
      />
      <Category
        text={GRADE_CATEGORY.FIRST.text}
        icon={GRADE_CATEGORY.FIRST.icon}
        color={GRADE_CATEGORY.FIRST.color}
      />
      <Category
        text={SUBJECT_CATEGORY.COURSE_REGISTRATION.text}
        icon={SUBJECT_CATEGORY.COURSE_REGISTRATION.icon}
        color={SUBJECT_CATEGORY.COURSE_REGISTRATION.color}
      />
      <Category
        text={SUBJECT_CATEGORY.CLASS.text}
        icon={SUBJECT_CATEGORY.CLASS.icon}
        color={SUBJECT_CATEGORY.CLASS.color}
      />
      <Category
        text={SUBJECT_CATEGORY.TEAM_PROJECT.text}
        icon={SUBJECT_CATEGORY.TEAM_PROJECT.icon}
        color={SUBJECT_CATEGORY.TEAM_PROJECT.color}
      />
      <Category
        text={SUBJECT_CATEGORY.ARTICLE.text}
        icon={SUBJECT_CATEGORY.ARTICLE.icon}
        color={SUBJECT_CATEGORY.ARTICLE.color}
      />
      <Category
        text={SUBJECT_CATEGORY.CAREER.text}
        icon={SUBJECT_CATEGORY.CAREER.icon}
        color={SUBJECT_CATEGORY.CAREER.color}
      />
      <Category
        text={SUBJECT_CATEGORY.PROJECT.text}
        icon={SUBJECT_CATEGORY.PROJECT.icon}
        color={SUBJECT_CATEGORY.PROJECT.color}
      />
      <Category
        text={SUBJECT_CATEGORY.STUDY.text}
        icon={SUBJECT_CATEGORY.STUDY.icon}
        color={SUBJECT_CATEGORY.STUDY.color}
      />
      <Category
        text={SUBJECT_CATEGORY.INTERNSHIP.text}
        icon={SUBJECT_CATEGORY.INTERNSHIP.icon}
        color={SUBJECT_CATEGORY.INTERNSHIP.color}
      />
      <Category
        text={SUBJECT_CATEGORY.ETC.text}
        icon={SUBJECT_CATEGORY.ETC.icon}
        color={SUBJECT_CATEGORY.ETC.color}
      />
      <Category
        text={CLASS_CATEGORY.ANNOUCEMENT.text}
        icon={CLASS_CATEGORY.ANNOUCEMENT.icon}
        color={CLASS_CATEGORY.ANNOUCEMENT.color}
      />
    </div>
  );
}

export default App;
