import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectHistory } from "../store/history/selectors";
import { fetchHistoryByUserId } from "../store/history/actions";
import { HistoryList } from "../store/history/types";
import moment from "moment";

const ExpressionHistory = () => {
  const user = useSelector(selectUser);
  const id = user.id;
  const dispatch = useDispatch();
  const userHistory: HistoryList = useSelector(selectHistory);

  useEffect(() => {
    dispatch(fetchHistoryByUserId(id));
  }, [dispatch, id]);

  return (
    <div>
      {user.token && (
        <table>
          <thead>
            <tr>
              <th>date</th>
              <th>expression</th>
            </tr>
          </thead>
          {userHistory &&
            userHistory.map((expression) => {
              return (
                <tbody key={expression.id}>
                  <tr>
                    <td>
                      {moment(expression.createdAt).format("MMMM Do, YYYY")}
                    </td>
                    <td>{expression.expression}</td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      )}
    </div>
  );
};

export default ExpressionHistory;
