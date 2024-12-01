// アラート出力
function AlertHello() {
    const numValue = document.getElementById('myNum').value;
    alert("Hello! num = " + numValue.toString());
}

// アレンジテーブルの生成
function GenerateArrageTable() {
    const rowCount = document.getElementById('rowCount').value; // 入力された行数
    const tableContainer = document.getElementById('tableContainer');

    // 入力値が有効かチェック
    if (!rowCount || rowCount <= 0) {
        tableContainer.innerHTML = '<p style="color:red;">有効な行数を入力してください。</p>';
        return;    
    }

    // 既存のテーブルをクリア
    tableContainer.innerHTML = '';

    // テーブル要素を作成
    const table = document.createElement('table');

    // ヘッダー行を作成
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['行番号', 'データ1', 'データ2'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // テーブルの行を生成
    const tbody = document.createElement('tbody');
    for (let i = 1; i <= rowCount; i++) {
        const row = document.createElement('tr');

        // 各行のセルを作成
        const rowNumberCell = document.createElement('td');
        rowNumberCell.textContent = i; // 行番号
        row.appendChild(rowNumberCell);

        const data1Cell = document.createElement('td');
        data1Cell.textContent = `データ${i}-1`;
        row.appendChild(data1Cell);

        const data2Cell = document.createElement('td');
        data2Cell.textContent = `データ${i}-2`;
        row.appendChild(data2Cell);

        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    // テーブルをコンテナに追加
    tableContainer.appendChild(table);
}

let button = document.getElementById('myButton');

button.addEventListener('click', GenerateArrageTable);