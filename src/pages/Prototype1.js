import React, { useEffect } from "react";
import CodeHighligher from "../components/CodeHighligher";
import vba from "../highlighter/languages/vba";

const code = `Option Explicit
Sub CopyDataFromFiles()

Dim FSO As Object
Dim Folder As Object
Dim File As Object
Dim a As Integer
Dim b As Integer
Dim FileName As String
Dim ws As Worksheet

On Error GoTo Failure

'Initialize File System Object
Set FSO = CreateObject("Scripting.FileSystemObject")
'Get the input folder
Set Folder = FSO.GetFolder("C:\\01_input_files")

'Check and message the user if folder is empty and without files
If Folder.Files.Count = 0 Then
    Err.Raise vbObjectError + 1, Description:="There is no data in the input folder"
End If

'Check if the worksheet ImportedFiles is not there with the function WorksheetExists
'And create a new tab (Worksheet) for all imported files
If Not WorksheetExists("ImportedFiles") Then
    Worksheets.Add(After:=Worksheets("Start")).Name = "ImportedFiles"
End If

'Go file to file in the folder 01_input_files and import the data to the worksheet ImportedFiles
For Each File In Folder.Files
    'Open file to read
    Workbooks.Open FileName:=File
    'Get the filename
    FileName = Mid(File, 19)
    'Initialize the worksheet with the data (in case of different worksheets with filled data)
    Set ws = Workbooks(FileName).Sheets("Tabelle1")
    'Copy the data from the input file
    'Start with row 2 and get the last row with the function GetLastRow
    ws.Range(ws.Cells(2, 1), ws.Cells(GetLastRow(ws), 19)).Copy
    'Paste the data to the worksheet ImportedFiles
    ThisWorkbook.Sheets("ImportedFiles").Cells(GetLastRow(ThisWorkbook.Sheets("ImportedFiles")) + 1, 1).PasteSpecial Paste:=xlPasteValuesAndNumberFormats
    'Copy and paste the header
    If ThisWorkbook.Worksheets("ImportedFiles").Cells(1, 1).Value = "" Then
        'Copy the first row
        Workbooks(FileName).Worksheets("Tabelle1").Range("1:1").Copy
        'Paste the first row in the worsheets ImportedFiles
        ThisWorkbook.Worksheets("ImportedFiles").Range("1:1").PasteSpecial
    End If
    'Count the files
    b = b + 1
    'Disable the system alert to avoid a message window
    Application.DisplayAlerts = False
    'Close the input file
    Workbooks(FileName).Close
Next File
'Enable the system alert
Application.DisplayAlerts = True
'Message the user about the number of the imported files
MsgBox b & " input files were copied"

Exit Sub
Failure:
    MsgBox "An error occured: " & Err.Description, vbCritical + vbOKOnly
End Sub

Public Function WorksheetExists(wsName As String) As Boolean
    Dim ws As Worksheet
    Dim ret As Boolean
    wsName = UCase(wsName)
    For Each ws In ThisWorkbook.Sheets
        If UCase(ws.Name) = wsName Then
            ret = True
            Exit For
        End If
    Next
    WorksheetExists = ret
End Function

Public Function GetLastRow(sheet As Worksheet, Optional column As Integer = 1) As Long
    
    GetLastRow = sheet.Cells(Rows.Count, column).End(xlUp).row
    
End Function`;

export default function Prototype1() {
  useEffect(() => {
    document.querySelector("body").className = "proto";
  }, []);
  return (
    <React.Fragment>
      <div class="row">
        <div class="image">
          <img src="/static/images/proto/1.webp" alt="proto_1" />
        </div>
        <div class="image">
          <img src="/static/images/proto/2.jpg" alt="proto_2" />
        </div>
      </div>

      <div class="row">
        <div class="main-main" style={{ "background-color": "#000000" }}>
          <h4>1. Open files from folder and copy the needed data</h4>
          <ul>
            <li>Create the folder on your drive c:</li>
            <img
              src="/static/images/proto/protos/proto1_1.PNG"
              alt="proto1_1"
            />
            <li>Insert the import files to your input folder</li>
            <img
              src="/static/images/proto/protos/proto1_2.PNG"
              alt="proto1_2"
            />
            <li>
              Create the main vba file with the sub procedure <br />
              (you can copy and paste the listed procedure below)
            </li>
            <img
              src="/static/images/proto/protos/proto1_3.PNG"
              alt="proto1_3"
            />
            <li>Create a button and assign to the name of the procedure</li>
            <img src="/static/images/proto/protos/proto1_4.PNG" alt="proto14" />
            <li>Test it</li>
          </ul>
          {/* prettier-ignore */}
          <CodeHighligher language={vba}>
          {code}
          </CodeHighligher>
        </div>
      </div>
    </React.Fragment>
  );
}
