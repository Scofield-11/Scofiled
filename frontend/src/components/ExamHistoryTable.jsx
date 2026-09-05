import React from 'react';
import EmptyState from './EmptyState';

function ExamHistoryTable({ history, setViewHistory }) {
  return (
    <>
      <h4 className="mb-3 mt-5">Lịch sử làm bài</h4>
      {history.length === 0 ? (
        <EmptyState title="Chưa có dữ liệu" message="Lịch sử làm bài thi của bạn sẽ được hiển thị tại đây." />
      ) : (
        <div className="card shadow-sm border-0 mb-5">
          <div className="table-responsive">
            <table className="table table-hover mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th>Thời gian</th>
                  <th>Tên bài thi</th>
                  <th>Kết quả</th>
                  <th className="text-end">Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {history.map(record => (
                  <tr key={record.id}>
                    <td className="text-muted small">{record.date}</td>
                    <td className="fw-bold">{record.title}</td>
                    <td><span className={`badge ${record.score === record.total ? 'bg-success' : 'bg-primary'}`}>{record.score} / {record.total}</span></td>
                    <td className="text-end"><button className="btn btn-sm btn-outline-info" onClick={() => setViewHistory(record)}>Xem lại</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ExamHistoryTable;