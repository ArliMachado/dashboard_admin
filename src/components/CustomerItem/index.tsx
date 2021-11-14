import * as S from './styles';

type CustomerItemProps = {
  image: string;
  alt: string;
  name: string;
  country: string;
};

const CustomerItem = ({ image, alt, name, country }: CustomerItemProps) => {
  return (
    <S.Wrapper>
      <S.ImageContent>
        <S.Image src={image} alt={alt} />
      </S.ImageContent>
      <S.UserDetails>
        <S.Username>{name}</S.Username>
        <S.Country>{country}</S.Country>
      </S.UserDetails>
    </S.Wrapper>
  );
};

export default CustomerItem;
