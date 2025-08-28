import Header from '@shared/components/Header/Header.tsx';
import Link from './components/Link';
import * as styles from './Info.css.ts';

export default function Info() {
  return (
    <div className={styles.container}>
      <Header showBackButton={true} showLogo={false} />
      <div className={styles.main}>
        <div className={styles.content}>
          <p className={styles.title}>🔗 건국대학교 링크를 확인해보세요!</p>
          <div className={styles.linkContainer}>
            <Link
              text="건국대학교 위인전"
              href="https://wein.konkuk.ac.kr/common/user/login.do?rtnUrl=8f4d222b9b8edea9acd345835aea594efbe2fd91b58f38dc7634e924e73e51ad"
            />
            <Link text="건국대학교 홈페이지" href="https://www.konkuk.ac.kr/konkuk/index.do" />
            <Link text="건국대학교 학사종합정보시스템" href="https://kuis.konkuk.ac.kr/index.do" />
            <Link
              text="건국대학교 이캠퍼스"
              href="https://ecampus.konkuk.ac.kr/ilos/main/main_form.acl"
            />
            <Link text="건국대학교 수갈신청" href="https://sugang.konkuk.ac.kr" />
            <Link
              text="건국대학교 인턴십의무이수제"
              href="https://www.konkuk.ac.kr/bulletins25/27675/subview.do"
            />
            <Link
              text="건국대학교 캘린더"
              href="https://outlook.office365.com/calendar/published/0a5e22263dff43609142c77a5ad9b947@konkuk.ac.kr/3131b7dad7b44597a670d9fb9ed777e28600923425300845442/calendar.html"
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>🔗 건국대학교 컴퓨터공학부 관련 링크를 확인해보세요!</p>
          <div className={styles.linkContainer}>
            <Link
              text="건국대학교 컴퓨터공학부 졸업요건"
              href="https://www.konkuk.ac.kr/bulletins25/27752/subview.do?enc=Zm5jdDF8QEB8JTJGb2xiMjVHcmRScXJtbnQlMkZidWxsZXRpbnMyNSUyRjY4JTJGdmlldy5kbyUzRnNyY2hZZWFyJTNEMjAyNSUyNnNyY2hDbGclM0QxMDMwNDElMjZzcmNoTWpyJTNEMTI3NDI4JTI2"
            />
            <Link
              text="건국대학교 컴퓨터공학부 전공역량/ 로드맵"
              href="https://www.konkuk.ac.kr/bulletins25/28109/subview.do"
            />
            <Link
              text="건국대학교 컴퓨터공학부 졸업요건"
              href="https://www.konkuk.ac.kr/bulletins25/27752/subview.do?enc=Zm5jdDF8QEB8JTJGb2xiMjVHcmRScXJtbnQlMkZidWxsZXRpbnMyNSUyRjY4JTJGdmlldy5kbyUzRnNyY2hZZWFyJTNEMjAyNSUyNnNyY2hDbGclM0QxMDMwNDElMjZzcmNoTWpyJTNEMTI3NDI4JTI2"
            />
            <Link
              text="건국대학교 컴퓨터공학부 전공교육과정"
              href="https://www.konkuk.ac.kr/bulletins25/28110/subview.do"
            />
            <Link
              text="건국대학교 컴퓨터공학부 전공프로그램"
              href="https://www.konkuk.ac.kr/bulletins25/29366/subview.do"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
