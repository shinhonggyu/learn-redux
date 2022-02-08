// 컨테이너 컴포넌트란, 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트를 의미합니다.
// 그리고, HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { setDiff, increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());

  const onDecrease = () => dispatch(decrease());

  const onSetDiff = (diff) => {
    console.log("diff값", diff);
    dispatch(setDiff(diff));
  };

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
